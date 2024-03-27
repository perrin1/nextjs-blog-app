import Comments from "@/components/Comments";
import FormComments from "@/components/FormComments";

import prisma from "@/lib/db";
import Link from "next/link";
import React, { FC } from "react";

interface BlogDataPropsParame {
  params:{
    id: string;
  }
}

const page: FC<BlogDataPropsParame> = async ({params}) => {
  const posts = await prisma.post.findFirst({
    where: {
      id: params.id,
    },
    include: {
      author: true,
    },
  });


  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className=" text-3xl font-bold mb-4 "> {posts?.title} </h1>
      <p>written by : {posts?.author?.name} </p>

      <div className="mt-4">
       {posts?.content}
      </div>

      <Comments postId = {params.id} />
      <FormComments postId = {params.id} />
    </div>
  );
};

export default page;
