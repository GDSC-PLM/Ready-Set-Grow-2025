"use client";

import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const handleNavigateActivity = (activity) => {
    router.push(`/activities?initialTab=${encodeURIComponent(activity)}`);
  };

  return (
    <footer className="bg-white py-16 border-t border-[#cfcfcf] sm:px-8 flex lg:flex-row  gap-20 lg:gap-0 justify-between">
      <div className="px-4 w-full">
        <img
          className="min-w-[370px]"
          src="/images/icons/gdsc-footer.svg"
          alt="gdsc banner footer"
        />
        <div className="flex space-x-1 mt-2">
          <a
            href="https://www.facebook.com/gdsc.haribon"
            target="_blank"
            className="hover:opacity-60 transition-opacity duration-300"
          >
            <img
              src="/images/icons/fb-icon.svg"
              alt="facebook icon"
              className="h-[24px] w-auto"
            />
          </a>
          <a
            href="https://www.instagram.com/gdsc_plm/"
            target="_blank"
            className="hover:opacity-60 transition-opacity duration-300"
          >
            <img
              src="/images/icons/ig-icon.svg"
              alt="instagram icon"
              className="h-[24px] w-auto"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/gdsc-plm/posts/?feedView=all"
            target="_blank"
            className="hover:opacity-60 transition-opacity duration-300"
          >
            <img
              src="/images/icons/linkedin-icon.svg"
              alt="linkedin icon"
              className="h-[24px] w-auto"
            />
          </a>
        </div>
      </div>

      <div className="flex justify-around w-full ">
        <div className="flex-col gap-2 hidden sm:flex">
          <h3 className="color-[#434343] text-lg font-bold hover:scale-110 transition-all duration-300">
            RSG 2025
          </h3>
          <a
            href="/"
            className="color-[#434343] text-base hover:scale-110 transition-all duration-300"
          >
            Home
          </a>
          <a
            href="/about"
            className="color-[#434343] text-base hover:scale-110 transition-all duration-300"
          >
            About Us
          </a>
          <a
            href="/recap"
            className="color-[#434343] text-base hover:scale-110 transition-all duration-300"
          >
            2024 Recap
          </a>
        </div>
        <div className="flex-col gap-2 hidden md:flex">
          <h3 className="color-[#434343] text-lg font-bold hover:scale-110 transition-all duration-300">
            Activities
          </h3>
          <p
            onClick={() => handleNavigateActivity("ready")}
            className="color-[#434343] text-base hover:scale-110 transition-all duration-300"
          >
            Ready
          </p>
          <p
            onClick={() => handleNavigateActivity("set")}
            className="color-[#434343] text-base hover:scale-110 transition-all duration-300"
          >
            Set
          </p>
          <p
            onClick={() => handleNavigateActivity("grow")}
            className="color-[#434343] text-base hover:scale-110 transition-all duration-300"
          >
            Grow
          </p>
        </div>
        <div className=" flex-col gap-2 hidden lg:flex">
          <h3 className="color-[#434343] text-lg font-bold hover:scale-110 transition-all duration-300">
            Contact Us
          </h3>
          <a
            href="mailto:gdscplm@gmail.com"
            className="color-[#434343] text-base hover:scale-110 transition-all duration-300"
          >
            gdscplm@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
