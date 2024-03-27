import React, { FC } from "react";

import prisma from "@/lib/db";
import { format } from "date-fns/format";
interface CommentPropsId {
  postId: string;
}
const Comments: FC<CommentPropsId> = async ({ postId }) => {
  const comments = await prisma.comment.findMany({
    where: {
      postId: postId,
    },
    include: {
      author: true,
    },
  });

  return (
    <div className="mt-8 mb-4  ">
      <h1 className=" text-3xl font-bold mb-4 ">All Comments</h1>

      <ul>
        {comments.map((comment) => (
          <li key={comment?.id} className="mb-4 bg-slate-300 p-2 ">
            <div className=" flex items-center mb-2 ">
              <div className="text-blue-500 font-bold mr-2 "> {comment.author?.name} </div>
              <div className="text-gray-500 "> {format(comment.createdAt, 'MMMM d, yyyy' )} </div>
            </div>
            <p>
              {comment.text} 
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
