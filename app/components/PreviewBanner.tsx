import React from "react";
import { Bannertype } from "../types/banner";
const PreviewBanner = ({ data }: any) => {
  return (
    <div className=" w-[300px] h-[200px] bg-slate-300 relative  ">
      <img className=" w-full h-full" src={data?.background} alt="" />
      <img
        className=" w-[90px] h-[90px] z-20  absolute bottom-[25%] right-10 rounded-full"
        src={data?.image}
        alt=""
      />
      <div className=" absolute z-10 w-[60%] flex justify-between flex-col h-full top-0 left-0 right-0 bottom-0 py-2 px-1">
        <h1 className=" font-bold text-lg text-white">{data?.title}</h1>
        <h4 className=" text-xs w-[80%] text-slate-200 mt-2">
          {data?.description}
        </h4>
        <button className=" bg-white rounded-md w-max px-4 py-2 text-cyan-600 text-[10px] font-semibold">
          {data?.cta}
        </button>
      </div>
    </div>
  );
};

export default PreviewBanner;
