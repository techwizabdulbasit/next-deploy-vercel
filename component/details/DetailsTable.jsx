import React from "react";

const DetailsTable = () => {
  return (
    <div className="text-[#000000] ">
      <div className="p-4 flex">
        <h1 className="text-lg font-bold">3 Units</h1>
      </div>
      <div className="px-3  flex justify-center items-center">
        <table className="w-full text-[6px] sm:text-xs lg:text-[16px] bg-white rounded">
          <tbody>
            <tr className="border-b border-[#2F5F82] ">
              <th className="text-left p-3 px-5">Unit</th>
              <th className="text-left p-3 px-5">Price</th>
              <th className="text-left p-3 px-5">SQ FT</th>
              <th className="text-left p-3 px-5">Availability</th>
            </tr>
            <tr className="border-b border-[#2F5F82] ">
              <td className="p-3 px-5">
                <div className="">123</div>
              </td>
              <td className="p-3 px-5">
                <div className="">$1,575</div>
              </td>
              <td className="p-3 px-5">
                <div className="">275</div>
              </td>
              <td className="p-3 px-5">
                <div className="">August 1</div>
              </td>
            </tr>
            <tr className="border-b border-[#2F5F82] ">
              <td className="p-3 px-5">
                <div className="">123</div>
              </td>
              <td className="p-3 px-5">
                <div className="">$1,575</div>
              </td>
              <td className="p-3 px-5">
                <div className="">275</div>
              </td>
              <td className="p-3 px-5">
                <div className="">August 1</div>
              </td>
            </tr>{" "}
            <tr className="border-b border-[#2F5F82] ">
              <td className="p-3 px-5">
                <div className="">123</div>
              </td>
              <td className="p-3 px-5">
                <div className="">$1,575</div>
              </td>
              <td className="p-3 px-5">
                <div className="">275</div>
              </td>
              <td className="p-3 px-5">
                <div className="">August 1</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailsTable;
