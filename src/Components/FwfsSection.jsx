import React from "react";

import { TfiWorld } from "react-icons/tfi";
import { FiBox,  } from "react-icons/fi";
import { GiAutoRepair } from "react-icons/gi";
import { LiaCertificateSolid } from "react-icons/lia";

const FwfsSection = () => {
  return (
    <div className="lg:flex w-full ml-2 lg:justify-evenly py-10 border-y  items-start">
      <div className="lg:w-1/4 space-y-3 ">
        <FiBox className="text-5xl"/>
        <h3 className="text-black  text-xl font-semibold underline">
          Free shipping over $200
        </h3>
        <p className="text-lg">
          Enjoy the freedom of free shipping on orders over $200.
        </p>
      </div>
      <div className="lg:w-1/4 space-y-3 ">
      <TfiWorld className="text-5xl"/>
        <h3 className="text-black text-xl font-semibold underline">
        We ship worldwide
        </h3>
        <p className="text-lg">
        Experience global reach with our worldwide shipping service.
        </p>
      </div>
      <div className="lg:w-1/4 space-y-3 ">
      <GiAutoRepair className="text-5xl"/>
        <h3 className="text-black text-xl font-semibold underline">
        Free repairs for life
        </h3>
        <p className="text-lg">
        Rest easy knowing your purchase includes free repairs for life.
        </p>
      </div>
     
      <div className="lg:w-1/4 space-y-3 ">
      <LiaCertificateSolid className="text-5xl"/>
        <h3 className="text-black text-xl font-semibold underline">
        Satisfaction guaranteed
        </h3>
        <p className="text-lg">
        Your satisfaction is our unwavering promise - guaranteed.
        </p>
      </div>
    </div>
  );
};

export default FwfsSection;
