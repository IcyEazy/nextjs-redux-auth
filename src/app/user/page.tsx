"use client";

import { useAppSelector } from "@/redux/store";
import Link from "next/link";
import React from "react";
import { logOut } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

function UserPage() {
  const fullName = useAppSelector((state) => state.authReducer.value.fullname);
  const username = useAppSelector((state) => state.authReducer.value.username);
  const email = useAppSelector((state) => state.authReducer.value.email);
  const course = useAppSelector((state) => state.authReducer.value.course);
  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);

  const dispatch = useDispatch<AppDispatch>();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className="bg-gray-800 h-screen flex flex-col gap-10 px-10 py-20 text-white items-center">
      {isAuth && (
        <h1 className="font-semibold text-2xl">
          Welcome To {username.toUpperCase().charAt(0) + username.slice(1)}
          &apos;s Page
        </h1>
      )}
      <div className="flex flex-col items-center gap-10">
        <p>
          My full name is:{" "}
          <span className="font-semibold text-xl">{fullName}</span>
        </p>
        <p>
          My username is:{" "}
          <span className="font-semibold text-xl">@{username}</span>
        </p>
        <p>
          My email address is:{" "}
          <span className="font-semibold text-xl">{email}</span>
        </p>
        <p>
          My course of study is:{" "}
          <span className="font-semibold text-xl">{course}</span>
        </p>
        <Link href="/">
          <button
            onClick={handleLogOut}
            type="button"
            className="bg-blue-500 hover:bg-blue-700 font-semibold px-5 py-2 rounded-md"
          >
            Log out
          </button>
        </Link>
      </div>
    </div>
  );
}

export default UserPage;
