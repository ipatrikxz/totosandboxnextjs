"use client";

import React, { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const UserProfileButton = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={!session ? signIn : toggleDropdown}>
        <UserCircleIcon
          className={`h-full ${!session ? "text-gray-200" : "text-green-500"}`}
          title={
            !session ? "Login / Sign Up" : `Logged in as: ${session.user.email}`
          }
        />
      </button>

      {isOpen && (
        <ul className="fixed top-20 right-1 bg-white text-xl text-gray-500 border-gray-500 cursor-pointer">
          <li className="px-4 py-2 hover:bg-gray-100 border">
            <Link href="/user">Profile</Link>
          </li>

          <li onClick={signOut} className="px-4 py-2 hover:bg-gray-100">
            Logout
          </li>
        </ul>
      )}
    </>
  );
};

export default UserProfileButton;
