"use client";

import React, { useEffect, useState } from "react";
import DashboardLayout from "../component/DashboardLayout/page";
import Dashboard_Card from "../component/dashboard_cards/page";
import Dashboard_Chart from "../component/dashboard_chart/page";
import axios from "axios";
import { useQuery } from "react-query";
import Loading from '../component/loader/page'
import Error from '../component/error_page/page'

function page() {
  const API = localStorage.getItem('api');
  const Token = sessionStorage.getItem('Token')

  const headers = {
    Authorization: `Bearer ${Token}`,
  };


  const retrieveData = async () => {
    const response = await axios.get(
      `${API}/user/get_count/`,
      { headers }
    );
    return response.data;
  };

  const { data, error, isLoading } = useQuery("postsData", retrieveData);


  return (
    <DashboardLayout>
     
      {isLoading ? (
              <Loading />
            ) : error ? (
              <Error message={error.message} />
            ) : (
          <>
           <h1 className="text-2xl pl-1 pb-5 pt-2 font-inherit uppercase text-white">
              dashboard
            </h1>
            <div>
              <Dashboard_Card data={data.data} />
            </div>
            <div className="mt-10">
              <Dashboard_Chart
                data={data.data}
              />
            </div>
          </>

      )}

    </DashboardLayout>
  );
}

export default page;