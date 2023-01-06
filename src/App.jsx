import React, { useState } from "react";
import customHooks from "./customHooks";

function App() {
  const {
    textAreaRef,
    timeRemaining,
    text,
    wordCount,
    isGameOn,
    updateText,
    startGame,
    increment,
    decrement,
    lightMode,
    toggleLightMode,
  } = customHooks();

  return (
    <div
      className={`md:w-2/3 border m-auto md:h-auto h-[100vh] md:my-10  p-2 flex flex-col items-center justify-center ${
        lightMode ? "bg-[#F2F4F4]" : "bg-[#3e4142]"
      } ${lightMode ? "text-[#121212]" : "text-[white]"} shadow-2xl transition-all duration-700`}
    >
      <div className="flex items-center w-full justify-between md:mt-0 mt-[-200px]">
        <h1 className="text-4xl font-bold mb-5 underline">
          THE{" "}
          <span className="text-2xl font-bold text-[#2471A3]">TYPETEST!</span>
        </h1>
        <div className={`w-[50px] ${lightMode ? "bg-slate-800" : "bg-[white]"} h-[20px] rounded-xl`} onClick={toggleLightMode}>
          <div className={`w-[25px] h-[20px] ${lightMode ? "bg-[white]" : "bg-slate-800"} rounded-2xl ${lightMode ? "float-left" : "float-right"}`}></div>
        </div>
      </div>
      <h2 className="bg-[#2471A3] p-1 rounded text-white mt-3">
        Think you can type fast? click the start button to start the game! All
        the best!!!{" "}
      </h2>
      <div
        className={`mt-3 ${lightMode ? "text-[#121212]" : "text-white"} md:w-1/3`}
      >
        <p className="underline p-1 rounded text-center text-[#2471A3] text-xl md:w-1/2 m-auto">
          Set Duration
        </p>
        <div className="flex justify-between gap-10 mt-2">
          <button
            className="border px-10 text-2xl bg-[#2471A3] rounded-xl hover:bg-slate-700 transition-all duration-300 font-extrabold"
            onClick={decrement}
            disabled={isGameOn > 0 ? true : false}
          >
            -
          </button>
          <button
            className="border px-10 text-2xl bg-[#2471A3] rounded-xl hover:bg-slate-700 transition-all duration-300 font-extrabold"
            onClick={increment}
            disabled={isGameOn > 0 ? true : false}
          >
            +
          </button>
        </div>
      </div>
      <div className="md:flex  w-full h-[300px] md:h-auto md:w-3/4 justify-between   bg-[#122430] mt-3 p-2 rounded">
        <textarea
          className={`w-full md:w-2/3 md:h-44 h-[60%] border shadow-black my-3 ${
            isGameOn ? "text-black" : "text-white"
          } p-2`}
          placeholder="Please type here..."
          onChange={updateText}
          value={text}
          disabled={isGameOn && timeRemaining !== 0 ? false : true}
          ref={textAreaRef}
        />
        <div className="w-full md:w-1/4 bg-white/40 rounded px-3 md:mt-0 text-white flex md:flex-col flex-row items-center justify-between md:justify-center">
          <button
            className="w-1/2 my-3 p-2 md:w-full md:my-5 md:py-3 bg-[#2471A3] font-bold rounded-lg text-xl border text-center hover:bg-[#4881a8]"
            onClick={startGame}
            disabled={isGameOn ? true : false}
          >
            {isGameOn ? "Typing..." : "Start!"}
          </button>
          <div className="flex flex-col pb-2 border-[#2471A3] border px-2">
          <p className="text-sm md:text-md text-center mb-3">
            Total Word Count:
          </p>
          <button className="py-2 px-5 bg-[#2471A3] font-bold rounded-lg text-2xl border hover:bg-[#4881a8]">
            {wordCount}
          </button>
          </div>
        </div>
      </div>

      <h1 className="py-5 text-sm md:text-md mt-4">
        You have{" "}
        <span className="font-bold text-[#2471A3]">{timeRemaining}</span>{" "}
        seconds to play.
        <span className="text-[#2471A3]">
          {" "}
          Current time is:{" "}
          <span className="p-2 border rounded-sm text-xl bg-[#D4AC0D] font-bold">
            {timeRemaining} sec
          </span>
        </span>
      </h1>
    </div>
  );
}

export default App;
