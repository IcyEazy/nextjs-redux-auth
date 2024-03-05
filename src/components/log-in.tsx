"use client";
import Link from "next/link";
import React, { useState } from "react";
import { logIn } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

function LogIn() {
  const [fullname, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    const user = {
      fullname,
      username,
      email,
      course,
      isAuth: true,
    };
    dispatch(logIn(user));
  };

  return (
    <div>
      <form className="flex flex-col gap-5">
        <div className="w-[400px] flex flex-col gap-2">
          <label htmlFor="full_name">Full Name</label>
          <input
            onChange={(e) => setFullName(e.target.value)}
            className="rounded-md text-black p-2 outline-none"
            type="text"
            name="full_name"
            id="full_name"
          />
        </div>
        <div className="w-[400px] flex flex-col gap-2">
          <label htmlFor="username">Username</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="rounded-md text-black p-2 outline-none"
            type="text"
            name="username"
            id="username"
          />
        </div>
        <div className="w-[400px] flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-md text-black p-2 outline-none"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="w-[400px] flex flex-col gap-2">
          <label htmlFor="course-of-study">Course of study</label>
          <input
            onChange={(e) => setCourse(e.target.value)}
            className="rounded-md text-black p-2 outline-none"
            type="text"
            name="course"
            id="course-of-study"
          />
        </div>
        <Link href="/user">
          <button
            onClick={handleClick}
            type="submit"
            className="bg-blue-500 font-semibold hover:bg-blue-700 w-full px-6 py-2 rounded-md"
          >
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}

export default LogIn;
