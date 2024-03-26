import React from "react";

const Comments = () => {
  return (
    <div className="mt-8 mb-4  ">
      <h1 className=" text-3xl font-bold mb-4 ">All Comments</h1>

      <ul>
        <li className="mb-4 bg-slate-300 p-2 ">
          <div className=" flex items-center mb-2 ">
            <div className="text-blue-500 font-bold mr-2 ">John Doe</div>
            <div className="text-gray-500 "> 10-jun-2020</div>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            voluptatibus quis libero eum autem. Officiis inventore sunt vel
            velit, ut, et consectetur cum sapiente modi ipsum quas molestiae
            iusto! Quis?
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Comments;
