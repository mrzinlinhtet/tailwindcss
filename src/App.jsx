import React from "react";

const App = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center bg-gray-200 px-10 py-1 my-10 rounded-lg shadow-lg shadow-cyan-400">
        <h1 className="text-2xl font-bold text-cyan-700">Logo</h1>
        <div className="flex gap-5">
          <p className="hover:text-cyan-500">Home</p>
          <p className="hover:text-cyan-500">About</p>
          <p className="hover:text-cyan-500">Contact</p>
        </div>
      </div>
      <div className="w-72 bg-gray-300 p-4 rounded">
        <img src="data:image/png;base64,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" alt="" />
        <h3 className="my-3">Title</h3>
        <p className="leading-5 tracking-wider my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, expedita?</p>
        <button className="bg-blue-500 text-white px-5 py-1 rounded-md hover:bg-green-800">Detail</button>
      </div>
    </div>
  );
};

export default App;
