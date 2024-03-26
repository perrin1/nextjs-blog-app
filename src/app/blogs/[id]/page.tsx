import Comments from "@/components/Comments";
import FormComments from "@/components/FormComments";
import React from "react";

const page = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className=" text-3xl font-bold mb-4 ">Blog details</h1>
      <p>written by : Jon </p>

      <div className="mt-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
        dignissimos fugit tempore hic ex suscipit. Sapiente ex a dolorem
        praesentium iure, architecto voluptatum natus mollitia consequatur,
        atque tenetur accusamus pariatur?
      </div>

        <Comments />
        <FormComments />


    </div>
  );
};



export default page;
