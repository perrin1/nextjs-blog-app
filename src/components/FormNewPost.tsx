"use client";
import { FormData } from "@/types/blog";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

const inputClass =
  "w-full py-2 px-3 border rounded-lg border-gray-400 focus:outline-none focus:fing focus:border-blue-500";
const buttonClass =
  "w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold  py-2 px-3 border rounded-lg border-gray-400 focus:outline-none focus:fing focus:border-blue-500";

const FormNewPost = () => {
  const [formData, setformData] = useState<FormData>({
    title: "", 
    content: "",
  });

  const router = useRouter();
  const { data } = useSession();

  const handlerChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handlerSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/posts", formData);

      if (res.status === 200) {
        router.push(`/blogs/${res.data.newPost.id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handlerSubmit} className=" max-w-3xl mx-auto p-4 ">
      <div className="mb-4">
        <input
          type="text"
          className={inputClass}
          placeholder="Enter title"
          name="title"
          value={formData.title}
          onChange={handlerChange}
        />
      </div>
      <div className="mb-4">
        <ReactTextareaAutosize
          minRows={5}
          name="content"
          className={inputClass}
          placeholder="Enter th content"
          value={formData.content}
          onChange={handlerChange}
        />
      </div>

      <button
        disabled={!data?.user?.email}
        type="submit"
        className={buttonClass}
      >
        {" "}
        Submit 
      </button>
    </form>
  );
};

export default FormNewPost;

