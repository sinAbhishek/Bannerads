"use client";
import React, { useEffect, useState } from "react";
import PreviewBanner from "./PreviewBanner";
import { IoMdClose } from "react-icons/io";
import { BottomDrawerProps } from "../types/banner";

const BottomDrawer = ({ isOpen, onClose, banner, save }: BottomDrawerProps) => {
  const [bannerdata, setbannerdata] = useState(banner);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    console.log(e.target.value);
    setbannerdata({
      ...bannerdata,
      [id]: value,
    });
  };
  useEffect(() => {
    banner && setbannerdata(banner);
  }, [banner]);
  const handlesave = () => {
    save(bannerdata);
    onClose();
  };
  useEffect(() => {
    console.log(banner);
  }, []);
  return (
    <>
      {isOpen && <div className="overlay" onClick={onClose}></div>}
      <div className={`drawer px-4  relative ${isOpen ? "open" : ""}`}>
        <div className=" flex px-4 justify-between items-center fixed top-2 left-0 right-0 h-12">
          <h2 className=" w-max text-slate-800">Edit Banner</h2>
          <button
            className="closeButton w-max text-slate-600"
            onClick={onClose}
          >
            <IoMdClose size={"1.5rem"} />
          </button>
        </div>

        <div className=" mt-16  content overflow-auto h-[70%]">
          <div className=" w-full flex justify-center">
            <PreviewBanner data={bannerdata} />
          </div>

          <p className=" mt-4 text-slate-900 font-light text-sm">Title</p>
          <input
            className=" outline-none border w-full border-slate-200 px-4 py-2 rounded-md"
            type="text"
            id="title"
            value={bannerdata?.title}
            onChange={handleChange}
          />
          <p className=" mt-4 text-slate-900 font-light text-sm">Description</p>
          <input
            className=" outline-none border w-full border-slate-200 px-4 py-2 rounded-md"
            type="text"
            id="description"
            value={bannerdata?.description}
            onChange={handleChange}
          />
          <p className=" mt-4 text-slate-900 font-light text-sm">Button Text</p>
          <input
            className=" outline-none border w-full border-slate-200 px-4 py-2 rounded-md"
            type="text"
            id="cta"
            value={bannerdata?.cta}
            onChange={handleChange}
          />
        </div>
        <div className=" fixed bottom-0 left-0 right-0 h-16 px-4">
          <button
            onClick={handlesave}
            className=" w-full bg-teal-950 py-2 rounded-md text-white"
          >
            Done
          </button>
        </div>
      </div>
    </>
  );
};

export default BottomDrawer;
