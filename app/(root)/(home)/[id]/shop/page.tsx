import { Button } from '@/components/ui/button';
import Image from 'next/image';

const ShopPage = () => {
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
      <div className="flex justify-between">
        <h1>Showcase</h1>
        <Button>Create</Button>
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

export default ShopPage;
