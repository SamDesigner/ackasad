import React from "react";
import Button from "./global/Button";
const Contact = () => {
  return (
    <div className="h-[60vh] flex flex-col items-center gap-5 justify-center">
      <h1 className="text-[40px] font-bold"> Get in Touch</h1>
      <p className="w-[500px] text-center">
        Whether you’re seeking partnership or project collaboration, Ackasad is ready to connect. Reach out to our team
      </p>
      <Button type="primary" text="Contact Us" />
    </div>
  );
};

export default Contact;
