import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faLock } from "@fortawesome/free-solid-svg-icons";

const Appearance:FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-2 gap-3">
      <div className="  flex flex-col gap-1 relative ">
        <span className="text-cyan-700 font-semibold ">LAYOUT</span>
        <div className="w-full lg:w-full md:w-3/4  items-center mx-auto  border p-5 rounded ">
          <span className="font-medium ">Choose a layout of your Linkpath</span>

          <div className="flex md:flex-row-reverse  flex-col-reverse w-2/3  lg:px-0 px-5 items-center mx-auto gap-9 mt-3 ">
            <span className="absolute w-5 h-5 rounded-full bg-green-500 lg:left-[15.4rem] lg:top-20  md:left-[23.3rem]  right-[5.5rem] top-[4.6rem] flex items-center justify-center">
              <FontAwesomeIcon className="text-white text-sm" icon={faCheck} />
            </span>
            <span className="absolute w-5 h-5 rounded-full bg-white lg:left-[27rem] lg:top-20 md:right-56 bottom-[18.5rem] right-[5.5rem] flex items-center justify-center border border-black/40">
              <FontAwesomeIcon className=" text-sm" icon={faLock} />
            </span>

            <div className=" w-full rounded-lg py-2 bg-gray-600/30 h-72 md:h-auto ">
              <div className="flex flex-col items-center justify-center gap-2 ">
                <div className="flex flex-col w-full items-center justify-center gap-1 pt-3">
                  <span className="w-16 h-16 bg-slate-900/10 rounded-full"></span>
                  <span className="h-5 w-2/5  bg-cyan-600/20 rounded-md"></span>
                </div>
                <div className="flex flex-col w-full items-center gap-3 my-2">
                  <span className="w-3/4 h-6 bg-white/70 rounded-md"></span>
                  <span className="w-3/4 h-6 bg-white/70 rounded-md"></span>
                  <span className="w-3/4 h-6 bg-white/70 rounded-md"></span>
                  <span className="w-3/4 h-6 bg-white/70 rounded-md"></span>
                </div>
              </div>
            </div>
            <div className="w-full py-4 rounded-lg bg-cyan-600/10 h-72 md:h-auto">
              <div className="flex flex-col items-center justify-center  ">
                <div className="flex flex-col w-full items-center justify-center">
                  <span className="w-3/4 h-24 border flex items-center justify-center bg-slate-900/10">
                    <span className="w-[70%] h-[95%] border bg-slate-900/30"></span>
                  </span>
                  <span className="h-5 w-3/4 bg-cyan-600 border-b"></span>
                </div>
                <div className="flex flex-col w-full items-center">
                  <span className="w-3/4 h-8 bg-white border-b "></span>
                  <span className="w-3/4 h-8 bg-white border-b "></span>
                  <span className="w-3/4 h-8 bg-white border-b "></span>
                  <span className="w-3/4 h-8 bg-white border-b"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appearance;
