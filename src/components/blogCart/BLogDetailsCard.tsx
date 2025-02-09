import Image from "next/image";
import React from "react";

const BLogDetailsCard = () => {
  return (
    <div className="py-32">
      <div className="w-2/3  shadow-lg rounded-lg mx-auto p-6">
        <div className="mb-5 h-[100px] ">
          <Image
            src="/images/b2.jpg"
            width={500}
            height={100}
            alt="blog image"
            className=" w-full object-cover"
          />
        </div>
        <div className="text-gray-700 text-lg leading-relaxed">
          <p className="text-justify text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam aut
            quae, ullam provident quaerat et labore voluptatibus fugit
            laudantium tempore explicabo necessitatibus dolores deserunt
            consequuntur reiciendis nisi perspiciatis accusamus vero.
          </p>
        </div>
        <div className="flex justify-between items-center mt-5">
          <p>like</p>
        </div>
      </div>
    </div>
  );
};

export default BLogDetailsCard;
