import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-coral-red'> Popular </span> Products
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
        At our company, we take pride in offering an array of popular products that have captured the hearts and preferences of our valued customers. Our dedication to quality and innovation is evident in every item we create, ensuring that each product delivers a remarkable experience. From cutting-edge technology gadgets that simplify your daily life to fashion-forward accessories that elevate your style, our popular products stand as a testament to our commitment to excellence. With a focus on customer satisfaction, we constantly strive to exceed expectations, making these beloved products a cornerstone of our brand's success. Explore our popular products today . 
        </p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;