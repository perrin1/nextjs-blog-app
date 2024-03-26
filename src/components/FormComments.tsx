"use client";
import React, { FormEvent, useState } from "react";

const inputClass =
  "w-full py-2 px-3 border rounded-lg border-gray-400 focus:outline-none focus:fing focus:border-blue-500";

const buttonClass =
  "w-auto mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold  py-2 px-3 border rounded-lg border-gray-400 focus:outline-none focus:fing focus:border-blue-500";
const FormComments = () => {
  const [comment, setComment] = useState<string>("");

  const handlerSubmit = ()=> {
    console.log(comment);
    
  };
  return (
    <div className="mt-4">
      <div className="mt-4">
        <label
          htmlFor="comment"
          className="block text-gray-700 text-sm font-bold mb-2 "
        >
          Add Comment
        </label>

        <input
          type="text"
          className={inputClass}
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="your comment"
        />

        <button onClick={handlerSubmit} className={buttonClass}>
          {" "}
          Submit Comments
        </button>
      </div>
    </div>
  );
};

export default FormComments;
