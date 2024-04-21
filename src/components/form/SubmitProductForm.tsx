'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useUploadThing } from '@/lib/uploadthing';
import { Editor } from '@tinymce/tinymce-react';

import { Input } from '@/components/ui/input';
import { productValidationSchema } from '@/lib/validation/product.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Product } from '@prisma/client';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { FileUploader } from '../shared/fileUploader/FileUploader';
import { Badge } from '../ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

// import { checkoutProduct } from '@/lib/actions/transaction.action';
import { loadStripe } from '@stripe/stripe-js';

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

type TProductForm = {
  type: 'Create' | 'Update';
  product?: Product;
  productId?: string;
};

const SubmitProductForm = ({ type }: TProductForm) => {
  const editorRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      );
    }
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const { startUpload } = useUploadThing('imageUploader');

  // 1. Define the form.
  const form = useForm<z.infer<typeof productValidationSchema>>({
    resolver: zodResolver(productValidationSchema),
    defaultValues: {
      name: '',
      title: '',
      description: '',
      websiteUrl: '',
      imageUrl: '',
      pricingModel: '',
      tags: [],
      youtubeUrl: '',
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof productValidationSchema>) => {
    let uploadedImageUrl = values.imageUrl;

    if (files.length > 0) {
      const uploadedImages = await startUpload(files);

      if (!uploadedImages) {
        return;
      }

      uploadedImageUrl = uploadedImages[0].url;
    }

    const tool = {
      name: 'List a tool',
      feeAmount: 29,
    };

    // await checkoutProduct();

    // try {
    //   setIsSubmitting(true);
    //   const newProduct = await createProductIntoDb({
    //     product: {
    //       name: values.name,
    //       slug: slugify(values.name, { lower: true }),
    //       title: values.title,
    //       description: values.description,
    //       websiteUrl: values.websiteUrl,
    //       pricingModel: values.pricingModel,
    //       youtubeUrl: values.youtubeUrl,
    //       imageUrl: uploadedImageUrl,
    //     },
    //   });

    //   if (newProduct) {
    //     form.reset();
    //     toast.success('Product created successfully!');
    //   }

    //   console.log(newProduct, 'newProduct');
    // } catch (error: unknown) {
    //   console.log(error);
    // }
  };

  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: any
  ) => {
    if (e.key === 'Enter' && field.name === 'tags') {
      e.preventDefault();

      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();

      if (tagValue !== '') {
        if (tagValue.length > 15) {
          return form.setError('tags', {
            type: 'required',
            message: 'Tag must be less than 15 characters.',
          });
        }

        if (!field.value.includes(tagValue as never)) {
          form.setValue('tags', [...field.value, tagValue]);
          tagInput.value = '';
          form.clearErrors('tags');
        }
      } else {
        form.trigger();
      }
    }
  };

  const handleTagRemove = (tag: string, field: any) => {
    const newTags = field.value.filter((t: string) => t !== tag);

    form.setValue('tags', newTags);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-10 max-w-2xl mx-auto"
      >
        {/* Product Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Tool Name <span className="text-amber-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="border h-12 text-muted-foreground"
                />
              </FormControl>
              <FormDescription>This is your tool name</FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        {/* Short Descriptions */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Title <span className="text-amber-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="border h-12 text-muted-foreground"
                />
              </FormControl>
              <FormDescription>
                A short description of your product max 70 characters
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        {/* Descriptions */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tool Descriptions</FormLabel>
              <FormControl>
                <Editor
                  apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
                  onInit={(evt, editor) => {
                    // @ts-ignore
                    editorRef.current = editor;
                  }}
                  onBlur={field.onBlur}
                  onEditorChange={(content) => field.onChange(content)}
                  initialValue=""
                  init={{
                    height: 350,
                    menubar: false,
                    plugins: [
                      'advlist',
                      'autolink',
                      'lists',
                      'link',
                      'image',
                      'charmap',
                      'preview',
                      'anchor',
                      'searchreplace',
                      'visualblocks',
                      'codesample',
                      'fullscreen',
                      'insertdatetime',
                      'media',
                      'table',
                    ],
                    toolbar:
                      'undo redo | ' +
                      'codesample | bold italic forecolor | alignleft aligncenter |' +
                      'alignright alignjustify | bullist numlist',
                    content_style: 'body { font-family:Inter; font-size:16px}',
                    // skin: mode === 'dark' ? 'bg-background' : 'oxide',
                    // content_css: mode === 'dark' ? 'dark' : 'light',
                  }}
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Max 2000 characters. Note that only the first ~100 characters
                will show up in search results.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        {/* Website */}
        <FormField
          control={form.control}
          name="websiteUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Website <span className="text-amber-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="border h-12 text-muted-foreground"
                />
              </FormControl>
              <FormDescription>This is your tool name</FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        {/* Image URL */}
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Image <span className="text-amber-500">*</span>
              </FormLabel>
              <FormControl>
                <FileUploader
                  onFieldChange={field.onChange}
                  imageUrl={field.value}
                  setFiles={setFiles}
                />
              </FormControl>
              <FormDescription>Add a logo of your app</FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        {/* Price */}
        <FormField
          control={form.control}
          name="pricingModel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Price <span className="text-amber-500">*</span>
              </FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select pricing model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="free">Free</SelectItem>
                    <SelectItem value="freemium">Freemium</SelectItem>
                    <SelectItem value="paid">Paid</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Tags */}
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="">
                Tags <span className="text-amber-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <>
                  <Input
                    disabled={type === 'Update'}
                    placeholder="Add tags..."
                    onKeyDown={(e) => handleInputKeyDown(e, field)}
                    className="border h-12 text-muted-foreground"
                  />

                  {field.value.length > 0 && (
                    <div className="flex justify-start items-start mt-2.5 gap-2.5">
                      {field.value.map((tag: any) => (
                        <Badge
                          key={tag}
                          className="bg-accent hover:bg-accent/80 text-foreground flex items-center justify-center gap-2 rounded-md border-none px-4 py-2 capitalize cursor-pointer"
                          onClick={() =>
                            type !== 'Update'
                              ? handleTagRemove(tag, field)
                              : () => {}
                          }
                        >
                          {tag}
                          {type !== 'Update' && <X className="size-4" />}
                        </Badge>
                      ))}
                    </div>
                  )}
                </>
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Add up to 3 tags to describe what your question is about. You
                need to press enter to add a tag.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        {/* Youtube URL */}
        <FormField
          control={form.control}
          name="youtubeUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Youtube URL</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="border h-12 text-muted-foreground"
                />
              </FormControl>
              <FormDescription>This is your tool name</FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          className="primary-gradient w-fit !text-light-900"
          disabled={isSubmitting}
        >
          {/* {isSubmitting ? (
            <>{type === 'Edit' ? 'Editing...' : 'Posting...'}</>
          ) : (
            <>{type === 'Edit' ? 'Edit Question' : 'Submit'}</>
          )} */}
          Submit $29
        </Button>
      </form>
    </Form>
  );
};

export default SubmitProductForm;
