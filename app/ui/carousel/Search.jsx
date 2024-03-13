import React from "react";

export const Search = () => {
  return (
    <section className="bg-transparent  flex justify-center">
     <div className="mt-10 w-auto mx-auto flex justify-center"
     style={{ background: 'radial-gradient(circle, #020D18 0%, transparent 100%)' }}>
        <input
          type="text"
          className="h-[37px] md:w-[50%] w-[75%] max-w-[600px] md:min-w-[500px] border-[#020D18] border-[2px] text-gray-500 justify-center rounded my-5 mx-3 pl-3"
        />
        <button className="mx-3 my-4 bg-[#020D18] p-2 rounded-xl hover:bg-blue-800">
          Search
        </button>
      </div>
    </section>
  );
};
