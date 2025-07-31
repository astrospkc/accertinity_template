import React from "react";

const Footer = () => {
  return (
    <>
      <div className="my-[20%] ">
        <div className="my-[10%] ">
          <div className="flex flex-col gap-4  py-[10%] rounded-4xl bg-gradient-to-b from-black to-blue-950  justify-center items-center">
            <h1 className="text-5xl font-bold text-white w-1/2">
              Ready to signup and join the waitlist?
            </h1>
            <p className="w-1/3 text-lg text-white">
              Get instant access to our state of the art project and join the
              waitlist.
            </p>
            <button className="rounded-4xl p-2 px-4 bg-black text-white border-2 border-white/20">
              Join Waitlist
            </button>
          </div>
        </div>
        <div className="my-[20%]">
          <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-start md:justify-between items-start md:items-center">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-2 cursor-pointer  ">
                <div className="w-8 h-6 bg-black rounded-tl-xl rounded-br-xl"></div>
                <span>Every AI</span>
              </div>
              <div className="flex flex-col gap-4 text-sm text-gray-600 items-start ">
                <h1>Copyright © 2024 Every Labs</h1>
                <h1>All rights reserved</h1>
              </div>
            </div>
            {/* items */}
            <div className="mt-[10%] md:mt-0">
              <FooterLinks />
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <div className="absolute pt-20 inset-x-0 top-0 h-40 w-full bg-gradient-to-t from-transparent via-white to-white"></div>
          <div className="absolute pt-20 inset-x-0 bottom-0 h-20 w-full bg-gradient-to-b from-transparent via-white to-gray-50"></div>

          <p class="text-center text-xl md:text-9xl lg:text-[18rem] font-bold bg-clip-text  text-gray-500/20">
            EVERY AI
          </p>
        </div>
      </div>
    </>
  );
};

const links = [
  "Pricing",
  "Blog",
  "Contact",
  "Privacy Policy",
  "Terms of Service",
  "Refund Policy",
  "Twitter",
  "LinkedIn",
  "GitHub",
];
function FooterLinks() {
  return (
    <div className="grid grid-cols-3 gap-4 text-start gap-x-11 ">
      {links.map((link) => (
        <span
          key={link}
          className="text-gray-600 text-sm hover:text-black cursor-pointer "
        >
          {link}
        </span>
      ))}
    </div>
  );
}
export default Footer;
