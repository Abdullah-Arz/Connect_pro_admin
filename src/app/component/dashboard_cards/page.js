"use client";
import React, { useLayoutEffect, useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import { FaUsers, FaBriefcase, FaRegComments, FaRegCircleStop } from "react-icons/fa6";

const page = ({data}) => {

  console.log('dashboard card data ----- ', data)
  const card_data = [
    {
      id: 1,
      title: "Users",
      count: data.user_count,
      icon: <FaUsers />,
      color: 'bg-green-700'
    },
    {
      id: 2,
      title: "Pro Users",
      count:  data.accepted_pro_count,
      icon: <FaBriefcase />,
      color: 'bg-yellow-500'
    },
    {
      id: 3,
      title: "Pending Requests",
      count:  data.peding_pro_count,
      icon: <FaRegCircleStop />,
      color: 'bg-red-600'
    },
    {
      id: 4,
      title: "Rejected Users",
      count:  data.rejected_pro_count,
      icon: <FaRegComments />,
      color: 'bg-blue-500'
    },
  ];

  return(
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-4 lg=grid-cols-4 md:grid-cols-4 sm:grid-cols-2">
    {
        card_data.map((item, index) => (
            <Card key={index} className="max-w-[350px] shadow-md 2xl:max-w-[1200px]  hover:shadow-xl bg-bgColor ">
              <CardBody className="flex flex-row justify-around items-center p-4 2xl:p-10 xl:p-10 lg:p-10 md:p-10 sm:p-4">
                <div className="flex-1">
                  <p className="uppercase text-textColor text-1md font-medium font-sans">
                    {item.title}
                  </p>
                  <p className="text-primaryColor text-3xl mt-1 font-semibold">{item.count}</p>
                </div>
        
                <div className={`rounded-full ${item.color} text-white text-4xl p-1 shadow-xl`}>
                  {item.icon}
                </div>
              </CardBody>
            </Card>
          ))
    }
    </div>
  )
};

export default page;