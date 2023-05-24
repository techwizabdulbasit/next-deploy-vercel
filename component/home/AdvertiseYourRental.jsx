import React from "react";
import Image from "next/image";
import AddvertiseBackGround from "../../public/assets/images/advertiseRental.png";

function AdvertiseYourRental() {
  return (
    <section className="flex lg:flex-row flex-col w-full items-center lg:items-stretch justify-between font-poppins">
      <div className=" w-full lg:w-[50%] relative flex items-center justify-center">
        <Image
          src={AddvertiseBackGround.src}
          alt="image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="bg-[#2f5f82b0] flex items-center text-center lg:text-start lg:items-start justify-center flex-col gap-3 lg:gap-5 text-white absolute top-0 left-0 h-full w-full p-5 md:p-10 lg:p-14" >
          <div className="" data-aos="fade-right">
            <h1 className="text-3xl lg:text-6xl font-bold">Advertise</h1>
            <h1 className="text-3xl lg:text-6xl font-bold">Your Rental</h1>
          </div>

          <p className=" w-[90%] lg:w-[80%] pb-1 lg:pb-48" data-aos="fade-right">
            By listing your property on our website, you'll reach a wide
            audience of renters looking for their next home in Milwaukee.{" "}
          </p>
        </div>
      </div>
      <div className="w-full lg:w-[50%] py-20 bg-[#2F5F82] flex item-center justify-center">
        <form  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
          className="md:w-[60%] w-full px-8 lg:px-1 text-white flex flex-col item-center justify-center gap-5 pb-10"
          action=""
        >
          <h1 className="text-2xl pb-5 font-bold">Send Request</h1>
          <input
            className="bg-transparent border-2 p-4 rounded-lg border-[#ffffff0d]"
            type="name"
            placeholder="First and Last Name"
          />
          <input
            className="bg-transparent border-2 p-4 rounded-lg border-[#ffffff0d]"
            type="email"
            placeholder="Email"
          />
          <input
            className="bg-transparent border-2 p-4 rounded-lg border-[#ffffff0d]"
            type="phone"
            placeholder="Phone"
          />
          <button type="button" className="bg-[#132634] hover:bg-[#173b55] active:bg-transparent  border-2 border-[#132634] text-white  font-medium p-2 lg:p-4 rounded-full">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default AdvertiseYourRental;
