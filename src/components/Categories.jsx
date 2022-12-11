const Categories = () => {
  return (
    <div className="categories container mx-auto py-20">
      <h2>Categories</h2>
      <div className="categories-wrapper grid grid-cols-5 gap-10">
        <div className="category w-full h-[50vh] group overflow-hidden hover:scale-110 duration-500 relative cursor-pointer">
          <img
            src="https://images.pexels.com/photos/11411554/pexels-photo-11411554.jpeg"
            alt="A Woman in White Long Sleeves Standing on the Street with Her Hand on Her Waist"
            className="w-full h-full object-cover brightness-50 grayscale group-hover:brightness-100 group-hover:grayscale-0 duration-1000 group-hover:scale-110"
          />
          <span className="absolute -bottom-20 group-hover:bottom-5 left-[50%] -translate-x-1/2 text-white uppercase text-4xl font-semibold z-[2] duration-1000">
            Tops
          </span>
          <span className="category-shutter absolute z-[1] bottom-[100%] left-0 h-full w-full bg-black group-hover:h-20 group-hover:bottom-0"></span>
        </div>
        <div className="category w-full h-[50vh] group overflow-hidden hover:scale-110 duration-500 relative cursor-pointer">
          <img
            src="https://images.pexels.com/photos/1007018/pexels-photo-1007018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Woman Wearing White Long-sleeved Shirt and Blue Skirt"
            className="w-full h-full object-cover brightness-50 grayscale group-hover:brightness-100 group-hover:grayscale-0 duration-1000 group-hover:scale-110"
          />
          <span className="absolute -bottom-20 group-hover:bottom-5 left-[50%] -translate-x-1/2 text-white uppercase text-4xl font-semibold z-[2] duration-1000">
            Skirts
          </span>
          <span className="category-shutter absolute z-[1] bottom-[100%] left-0 h-full w-full bg-black group-hover:h-20 group-hover:bottom-0"></span>
        </div>
        <div className="category w-full h-[50vh] group overflow-hidden hover:scale-110 duration-500 relative cursor-pointer">
          <img
            src="https://images.pexels.com/photos/7208429/pexels-photo-7208429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="A Woman Wearing a Floral Top and Ripped Jeans"
            className="w-full h-full object-cover brightness-50 grayscale group-hover:brightness-100 group-hover:grayscale-0 duration-1000 group-hover:scale-110"
          />
          <span className="absolute -bottom-20 group-hover:bottom-5 left-[50%] -translate-x-1/2 text-white uppercase text-4xl font-semibold z-[2] duration-1000">
            Pants
          </span>
          <span className="category-shutter absolute z-[1] bottom-[100%] left-0 h-full w-full bg-black group-hover:h-20 group-hover:bottom-0"></span>
        </div>
        <div className="category w-full h-[50vh] group overflow-hidden hover:scale-110 duration-500 relative cursor-pointer">
          <img
            src="https://images.pexels.com/photos/5861344/pexels-photo-5861344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Trendy ethnic female smiling and hunkering while looking at camera"
            className="w-full h-full object-cover brightness-50 grayscale group-hover:brightness-100 group-hover:grayscale-0 duration-1000 group-hover:scale-110"
          />
          <span className="absolute -bottom-20 group-hover:bottom-5 left-[50%] -translate-x-1/2 text-white uppercase text-4xl font-semibold z-[2] duration-1000">
            Shoes
          </span>
          <span className="category-shutter absolute z-[1] bottom-[100%] left-0 h-full w-full bg-black group-hover:h-20 group-hover:bottom-0"></span>
        </div>
        <div className="category w-full h-[50vh] group overflow-hidden hover:scale-110 duration-500 relative cursor-pointer">
          <img
            src="https://images.pexels.com/photos/13062404/pexels-photo-13062404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="A Woman in Orange Dress"
            className="w-full h-full object-cover brightness-50 grayscale group-hover:brightness-100 group-hover:grayscale-0 duration-1000 group-hover:scale-110"
          />
          <span className="absolute -bottom-20 group-hover:bottom-5 left-[50%] -translate-x-1/2 text-white uppercase text-4xl font-semibold z-[2] duration-1000">
            Dresses
          </span>
          <span className="category-shutter absolute z-[1] bottom-[100%] left-0 h-full w-full bg-black group-hover:h-20 group-hover:bottom-0"></span>
        </div>
      </div>
    </div>
  );
};

export default Categories;
