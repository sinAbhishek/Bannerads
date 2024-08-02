"use client";

import bannersdata from "./bannerdata/bannerdata.json";
import Banner from "./components/Banner";
import BottomDrawer from "./components/BottomDrawer";
import { useState } from "react";
import React from "react";
import { Bannertype } from "./types/banner";
export default function Home() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [banners, setBanners] = useState(bannersdata);
  const [selectedBanner, setSelectedBanner] = useState<Bannertype>(
    bannersdata[0]
  );
  const handleEdit = (banner: any) => {
    console.log(banner);
    setSelectedBanner(banner);
  };
  const handleSave = (updatedBanner: Bannertype) => {
    setBanners(
      banners.map((c) => (c.id === updatedBanner.id ? updatedBanner : c))
    );
  };
  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);
  return (
    <main className="flex  min-h-screen justify-center p-8 bg-cyan-500">
      <div className=" w-[80vw] h-full flex flex-col justify-center items-center">
        <div className="brand flex flex-col justify-center items-center">
          <img
            className=" w-[100px] h-[100px]  "
            src="./groweasylogo.jpeg"
            alt=""
          />
          <h2 className=" text-2xl text-slate-100 mt-2">Grow Easy</h2>
        </div>
        <div className="flex w-full flex-wrap justify-center items-center h-max gap-4 mt-4">
          {banners.map((ad) => (
            <Banner
              data={ad}
              key={ad.id}
              openDrawer={openDrawer}
              edit={handleEdit}
            />
          ))}
        </div>
        <div className="">
          <div className=""></div>
        </div>
      </div>
      <BottomDrawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        banner={selectedBanner}
        save={handleSave}
      />
    </main>
  );
}
