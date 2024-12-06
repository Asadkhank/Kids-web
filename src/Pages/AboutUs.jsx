import React from "react";
import about from '../assets/about1.webp';
import about2 from '../assets/about2.webp';
import about3 from '../assets/about3.webp';
import about4 from '../assets/about4.webp';
import about5 from '../assets/about5.webp';
import about6 from '../assets/asad.jpg';
import about7 from '../assets/Kezia.webp';
import about8 from '../assets/lucy.webp';
import about9 from '../assets/Orazio.webp';
import about10 from '../assets/Yiying.webp';

const AboutUs = () => {
  return (
    <section className="max-w-7xl items-center text-center mx-auto">
      <div>
        <h3 className="text-3xl font-bold">About US</h3>
        <p className="my-10 text-lg">
          Welcome to Kidu - your ultimate destination for quality toys and
          childlike wonder. At Kidu, we believe in the power of play to inspire,
          educate, and spark imagination. Our carefully curated collection of toys
          is designed to bring joy to children of all ages.
        </p>
        <img src={about} alt="About Us" className="w-full rounded" />
      </div>

      <div className="my-10">
        <h3 className="text-3xl pt-6 font-bold">Kidu Story</h3>
        <p className="my-10 text-lg">
          Embark on a whimsical journey with Kidu, where every toy tells a tale of laughter, discovery, and endless adventures.
          From cuddly companions to mind-expanding games, Kidu is more than a store – it's a magical haven where childhood dreams come to life.
        </p>

        <div className="flex flex-col lg:flex-row gap-4">
          <img src={about2} alt="Kidu Story Image 1" className="w-full lg:w-1/2 rounded" />
          <img src={about3} alt="Kidu Story Image 2" className="w-full lg:w-1/2 rounded" />
        </div>
      </div>

      <div className="text-start my-10 space-y-4">
        <h3 className="text-3xl font-bold">Crafting Dreams Globally: Kidu's Artisan Roots</h3>
        <p className="text-lg">
          Since 2011, our tight-knit family of designers and craftswomen in China has been handcrafting Kidu toys with unwavering dedication. Now, as our toys traverse the globe, fulfilling dreams and sparking joy, it's the heartwarming stories from our Kidu Fam that truly define our small company with a big heart.
        </p>
      </div>

      <div className="lg:flex items-center mt-16 mx-auto gap-8">
        {/* Image Section */}
        <div className="lg:w-1/3 w-full mb-6 lg:mb-0">
          <img src={about4} alt="Riceboo Mini Plush Toy" className="rounded w-full" />
        </div>
        {/* Text Section */}
        <div className="lg:w-2/3 w-full">
          <p className="text-lg lg:text-lg text-justify px-10 text-gray-700 leading-relaxed">
            After connecting with a small team of toymakers in China, we embarked on the Kidu journey. Over the years, our family has grown, and we now house a tight-knit community of designers, craftsmen, and packers, all driven by a common love for crafting enduring, high-quality products. Since 2011, the same talented Chinese craftswomen who believed in our Kidu dream continue to handcraft all our toys. Their unwavering dedication remains our daily inspiration.
          </p>
        </div>
      </div>

      <div className="lg:flex items-center mt-16 mx-auto gap-8">
        {/* Text Section */}
        <div className="lg:w-2/3 w-full">
          <p className="text-lg lg:text-lg text-justify px-10 text-gray-700 leading-relaxed">
            After connecting with a small team of toymakers in China, we embarked on the Kidu journey. Over the years, our family has grown, and we now house a tight-knit community of designers, craftsmen, and packers, all driven by a common love for crafting enduring, high-quality products. Since 2011, the same talented Chinese craftswomen who believed in our Kidu dream continue to handcraft all our toys. Their unwavering dedication remains our daily inspiration.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/3 w-full mb-6 lg:mb-0">
          <img src={about5} alt="Riceboo Mini Plush Toy" className="rounded w-full" />
        </div>
      </div>

      <section className="my-16">
        <div className="text-center w-full justify-between">
          <h2 className="text-3xl font-bold mb-8">Meet the Team</h2>
          <div className="flex flex-col lg:flex-row justify-evenly gap-8">
            <div className="text-center">
              <img src={about10} alt="Yiying" className="w-32 h-32 rounded-full mb-2 mx-auto" />
              <h3 className="text-xl font-semibold">Yiying</h3>
              <p>Founder</p>
            </div>
            <div className="text-center">
              <img src={about6} alt="Asad" className="w-32 h-32 rounded-full mb-2 mx-auto" />
              <h3 className="text-xl font-semibold">Asad</h3>
              <p>Designer</p>
            </div>
            <div className="text-center">
              <img src={about7} alt="Kezia" className="w-32 h-32 rounded-full mb-2 mx-auto" />
              <h3 className="text-xl font-semibold">Kezia</h3>
              <p>Designer</p>
            </div>
            <div className="text-center">
              <img src={about8} alt="Orazio" className="w-32 h-32 rounded-full mb-2 mx-auto" />
              <h3 className="text-xl font-semibold">Orazio</h3>
              <p>Studio Assistant</p>
            </div>
            <div className="text-center">
              <img src={about9} alt="Dini" className="w-32 h-32 rounded-full mb-2 mx-auto" />
              <h3 className="text-xl font-semibold">Dini</h3>
              <p>Production</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
