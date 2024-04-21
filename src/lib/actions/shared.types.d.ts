export interface CreateProductsParams {
  product: {
    name: string;
    slug: string;
    title: string;
    description: string;
    websiteUrl: string;
    imageUrl: string;
    pricingModel: string;
    // tags: string[];
    youtubeUrl?: string | undefined;
  };
}
