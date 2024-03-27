"use client";

import { signOut } from "next-auth/react";
import React from "react";

const LogOut = () => {
  return (
    <button
      onClick={() => signOut()}
      className="bg-white rounded-lg px-4 py-2 text-gray-700 font-bold"
    >
      LogOut
    </button>
  );
};

export default LogOut;
