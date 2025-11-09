import React from "react";
import TextButton from "./global/TextButton";
const Contact = () => {
  return (
    <div className=" relative contact_bg h-[70vh] ">
      <div className="max-w-7xl mx-auto px-5 flex flex-col items-start justify-center h-full ">
        <div className="bg-primary w-[400px] h-[200px] p-4 flex flex-col gap-3">
          <h1 className="text-[20px] font-kalnia">Contact</h1>
          <p>
            Ready to start your next project? Contact us today and let’s make it
            happen.
          </p>
          {/* <p className="font-bold font-sans cursor-pointer">⸺ Get in touch</p> */}
          <TextButton text='Get in touch' />
        </div>
      </div>
    </div>
  );
};

export default Contact;
