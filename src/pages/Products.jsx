import ProductCard from "../components/ProductCard";

const data = [
  {
    id: 1,
    title: "Dotline swiss black top with coat",
    img1: "https://images.pexels.com/photos/11311402/pexels-photo-11311402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/413959/pexels-photo-413959.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 20,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto culpa quia, provident voluptatibus rem nam nostrum beatae accusamus est excepturi itaque asperiores omnis doloribus explicabo. Molestiae dignissimos quis maiores repellendus!",
    isNew: true,
    isFeatured: true,
  },
  {
    id: 2,
    title: "Dotline swiss black top with coat",
    img1: "https://images.pexels.com/photos/11311402/pexels-photo-11311402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/413959/pexels-photo-413959.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto culpa quia, provident voluptatibus rem nam nostrum beatae accusamus est excepturi itaque asperiores omnis doloribus explicabo. Molestiae dignissimos quis maiores repellendus!",
    isNew: true,
    isFeatured: true,
  },
  {
    id: 3,
    title: "Dotline swiss black top with coat",
    img1: "https://images.pexels.com/photos/11311402/pexels-photo-11311402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/413959/pexels-photo-413959.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 17,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto culpa quia, provident voluptatibus rem nam nostrum beatae accusamus est excepturi itaque asperiores omnis doloribus explicabo. Molestiae dignissimos quis maiores repellendus!",
    isNew: true,
    isFeatured: true,
  },
  {
    id: 4,
    title: "Dotline swiss black top with coat",
    img1: "https://images.pexels.com/photos/11311402/pexels-photo-11311402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/413959/pexels-photo-413959.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 22,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto culpa quia, provident voluptatibus rem nam nostrum beatae accusamus est excepturi itaque asperiores omnis doloribus explicabo. Molestiae dignissimos quis maiores repellendus!",
    isNew: true,
    isFeatured: true,
  },
  {
    id: 5,
    title: "Dotline swiss black top with coat",
    img1: "https://images.pexels.com/photos/11311402/pexels-photo-11311402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/413959/pexels-photo-413959.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 22,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto culpa quia, provident voluptatibus rem nam nostrum beatae accusamus est excepturi itaque asperiores omnis doloribus explicabo. Molestiae dignissimos quis maiores repellendus!",
    isNew: true,
    isFeatured: true,
  },
];

const Products = () => {
  return (
    <div className="products container mx-auto py-20 grid grid-cols-5 gap-10">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
