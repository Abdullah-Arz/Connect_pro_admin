"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { BsPersonCircle } from "react-icons/bs";
import { TbUserCircle, TbLogout2, TbEyeBolt } from "react-icons/tb";
import Link from "next/link";
import { useRouter } from "next/navigation";

const user_dropdown = () => {
  const router=useRouter()
  const signOut=()=>{
    sessionStorage.clear()
    router.push('/')
  }
  return (
    <Dropdown>
      <DropdownTrigger>
        <span>
          <BsPersonCircle className="cursor-pointer text-3xl text-[#73858F] mr-5" />
          </span>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
        <DropdownItem
          key="admin"
          startContent={<TbUserCircle className="text-2xl text-gray-500" />}
        >
          Admin
        </DropdownItem>
        {/* <DropdownItem
          key="changepass"
          startContent={<TbEyeBolt className="text-2xl text-gray-500" />}
        >
         <Link href='/changePassword'>Change Password</Link> 
        </DropdownItem> */}
        <DropdownItem
          className="text-red-500 font-bold"
          color="danger"
          key="new"
          startContent={<TbLogout2 className="text-2xl text-red-500" />}
          onClick={()=>{signOut()}}
        >
          Sign Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default user_dropdown;