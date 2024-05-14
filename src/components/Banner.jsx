import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banners from '../assets/banner.png';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section
      className="py-20  bg-cover bg-no-repeat bg-right"
      style={{ backgroundImage: `url(${Banners})`, height: '700px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-left">
        <div className="text-left w-2/5 my-10">
          <h1 className=" text-brown sm:text-2xl md:text-4xl">
            Welcome to
            <br />
            <span className="font-extrabold text-white sm:text-5xl md:text-5xl">Dessert Book!</span>
          </h1>
          <p className="my-10 text-brown">
            Explore a treasure trove of delectable dessert recipes! Indulge in decadent cakes and
            irresistible cookies tailored to satisfy every craving. Delve into meticulously crafted
            recipes, glean helpful tips, and connect with fellow dessert aficionados in our vibrant
            community. Embark on a culinary journey with us today!
          </p>
          <div className="flex justify-between my-10 ">
            <button
              className="bg-rose hover:bg-darkerrose text-brown font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              onClick={() => navigate('recipes')}
            >
              Desserts
            </button>
            <div className="mx-4"></div>
            <button
              className="bg-rose hover:bg-darkerrose text-brown font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              onClick={() => navigate('addrecipe')}
            >
              Add Recipe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
