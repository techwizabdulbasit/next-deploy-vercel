import React from "react";

const DetailsForm = () => {
  return (
    <form className="w-full max-w-xl border-2 rounded-md border-[#2F5F82] p-5" data-aos="fade-up">
      <div className="flex flex-wrap ">
        <div className="w-full  ">
          <label className="block tracking-wide text-[#7D7F88] text-xs font-bold mb-1">
            First Name
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-[#2F5F82]  rounded py-2 px-4 mb-3 leading-tight "
            type="text"
          />
        </div>
        <div className="w-full  ">
          <label className="block tracking-wide text-[#7D7F88] text-xs font-bold mb-1">
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-[#2F5F82]  rounded py-2 px-4 mb-3 leading-tight "
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-wrap ">
        <div className="w-full">
          <label className="block tracking-wide text-[#7D7F88] text-xs font-bold mb-1">
            Email
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-[#2F5F82]  rounded py-2 px-4 mb-3 leading-tight "
            type="email"
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 ">
        <div className="w-full">
          <label className="block tracking-wide text-[#7D7F88] text-xs font-bold mb-1">
            Move In Date
          </label>
          <div className="relative">
            <select className="appearance-none text-sm block w-full bg-white text-gray-700 border border-[#2F5F82]  rounded py-2 px-4 mb-3 leading-tight">
              <option>1 january</option>
              <option>1 Fabruary</option>
              <option>1 March</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <label className="block tracking-wide text-[#7D7F88] text-xs font-bold mb-1">
            Phone
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-[#2F5F82]  rounded py-2 px-4 mb-3 leading-tight"
            type="phone"
          />
        </div>
      </div>
      <div className="w-full ">
        <label className="block tracking-wide text-[#7D7F88] text-xs font-bold mb-1">
          Message
        </label>
        <textarea
          className="appearance-none resize-none block w-full bg-white text-gray-700 border border-[#2F5F82]  rounded py-2 px-4 mb-3 leading-tight"
          name="text"
          id=""
          cols="30"
          rows="4"
        ></textarea>
      </div>
      <div className="flex flex-col text-center gap-6">
        <button className="w-full bg-[#2F5F82] hover:bg-[#144a70] text-white font-medium py-2 px-4 rounded-full">
          Send Message
        </button>
        <p className="text-xs text-[#7D7F88]">
          @ Email me listings and apartment related info.
        </p>
        <h1 className="font-semibold text-[#000000] text-lg">(414) 867-2829</h1>
      </div>
    </form>
  );
};

export default DetailsForm;
