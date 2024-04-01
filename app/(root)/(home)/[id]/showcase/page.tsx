import { Button } from '@/components/ui/button';
import Image from 'next/image';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const ShowcasePage = () => {
  const projects = [
    {
      title: 'project-1',
      description: 'This is project 1',
      image: '/assets/images/product-1.jpg',
    },
    {
      title: 'project-1',
      description: 'This is project 1',
      image: '/assets/images/product-1.jpg',
    },
    {
      title: 'project-1',
      description: 'This is project 1',
      image: '/assets/images/product-1.jpg',
    },
  ];
  return (
    <section className="bg-card rounded-2xl">
      <div className="flex justify-between items-center">
        <h1>Showcase</h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button>Create</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10 w-full items-center">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex border flex-col p-2 rounded-2xl bg-white shadow-md"
          >
            <Image
              src={project.image}
              height={200}
              width={200}
              alt={project.title}
              className="object-cover rounded-2xl w-full"
            />
            <div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowcasePage;
