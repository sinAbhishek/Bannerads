import React from "react";
import { MdEdit } from "react-icons/md";
import { BannerProps } from "../types/banner";
const Banner = ({ data, openDrawer, edit }: BannerProps) => {
  const handleClick = () => {
    edit(data);
    openDrawer();
  };
  return (
    <div className=" w-[400px] h-[400px] bg-slate-300 relative  ">
      <img className=" w-full h-full" src={data.background} alt="" />
      <img
        className=" w-[200px] h-[200px] z-20  absolute bottom-[25%] right-10 rounded-full"
        src={data.image}
        alt=""
      />
      <button onClick={handleClick} className=" absolute top-4 right-4 z-40">
        <MdEdit size={"1.2rem"} color="white" />
      </button>
      <div className=" absolute z-10 w-[70%] flex justify-between flex-col h-full top-0 left-0 right-0 bottom-0 py-8 px-6">
        <h1 className=" font-bold text-2xl text-white">{data.title}</h1>
        <h4 className=" text-sm w-[60%] text-slate-200 mt-2">
          {data.description}
        </h4>
        <button className=" bg-white rounded-md w-max px-4 py-2 text-cyan-600 text-[10px] font-semibold">
          {data.cta}
        </button>
      </div>
      <div className="shadowdrop absolute top-0 left-0 right-0 bottom-0"></div>
    </div>
  );
};

export default Banner;
