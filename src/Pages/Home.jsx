import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Slice/counterSlice";

const Home = () => {
  const Route = useSelector((state) => state.prity.value);
  const dispath = useDispatch();
  const handelAdd = () => {
    dispath(increment());
  };
  return (
    <>
      <div className="background">
        <div className=" flex gap-[40px] justify-center items-center w-full h-screen ">
          <button
            onClick={() => dispath(decrement())}
            className=" text-xl font-bold text-[#fff] bg-green-800 w-[200px] h-[70px] rounded-[10px] hover:bg-transparent hover:border-2 hover:border-red-700 hover:text-black active:scale-110 transition-all "
          >
            Remove
          </button>
          <h1 className="text-[100px] font-bold text-white">{Route}</h1>
          <button
            onClick={handelAdd}
            className=" text-xl font-bold text-[#fff] bg-green-800 w-[200px] h-[70px] rounded-[10px] hover:bg-transparent hover:border-2 hover:border-green-700 hover:text-black active:scale-110 transition-all "
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
