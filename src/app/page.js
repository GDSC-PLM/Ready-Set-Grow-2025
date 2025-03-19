import Image from "next/image";
import { sponsors } from "../data/sponsors";

export default function Home() {
  return (
    <div className="">
      {/* Landing Section */}
      <section className="px-[20px] sm:px-[80px] md:px-[100px] xl:px-[150px] py-[100px] mb-4 flex w-full justify-center lg:justify-between items-center">
        <div>
          <h4 className="text-[#848484] mb-4 text-lg">
            Google Developer Groups on Campus - PLM presents
          </h4>
          <Image
            src="/images/assets/RSG-Landing.svg"
            alt="RSG Theme"
            width={650}
            layout="intrinsic"
            height={500}
          />
          <h5 className="text-lg mb-10 font-medium">
            April 21 (Online) . April 28 (Venue)
          </h5>
          <a href="#">
            <button
              className="bg-[#FDB528] border-2 border-black text-lg py-[10px] px-[32px] font-bold rounded-full 
             transition-all transform hover:scale-105 hover:bg-[#e0a622] duration-300"
            >
              Register Now
            </button>
          </a>
        </div>
        <div className="hidden lg:block">
          <Image
            src="/images/assets/RSG-Landing-Design.svg"
            alt="Landing page design"
            className="h-full w-auto"
            width={500}
            layout="intrinsic"
            height={400}
          />
        </div>
      </section>

      {/* Action Section*/}
      <section className="px-[20px] sm:px-[80px] md:px-[100px] xl:px-[150px] py-[150px] bg-[#FDEFE6] flex space-x-4 justify-around">
        <div className="max-w-3xl">
          <h4
            className="text-[#30AC66] text-5xl font-black mb-10"
            style={{ textShadow: "-3px 3px 0px #000" }}
          >
            Shaping Careers for Growth
          </h4>
          <h5 className="text-lg mb-10 font-medium">
            We help students navigate their careers and unlock pathways to
            success by equipping them with deliberate, ethical, and imaginative
            strategies for professional growth. <br />
            <br /> This track tackles modern career challenges, focusing on AI,
            green jobs, freelancing, and adaptability, equipping students for
            success in an evolving world.
          </h5>
          <a href="#">
            <button
              className="bg-[#30AC66] border-2 border-black text-lg py-[10px] px-[32px] font-bold rounded-full 
             transition-all transform hover:scale-105 hover:bg-[#30BC66] duration-300"
            >
              Register Now
            </button>
          </a>
        </div>
        <div>
          <Image
            src="/images/assets/GDSC-Logo-Stylized.svg"
            alt="GDSC Logo"
            width={650}
            layout="intrinsic"
            height={500}
          />
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="flex flex-col items-center px-[50px] sm:px-[100px] md:px-[150px] xl:px-[250px] py-[150px]">
        <h4
          className="text-[#2186EE] text-6xl font-black mb-20 text-center"
          style={{ textShadow: "-3px 3px 0px #000" }}
        >
          We’ve partnered with the greatest companies
        </h4>

        <div className="flex flex-wrap justify-center items-center gap-12 w-full">
          {sponsors.map((sponsor, index) => (
            <div key={sponsor + index} className="flex items-center">
              <Image
                src={`/images/sponsors/${sponsor}`}
                alt={sponsor}
                layout="intrinsic"
                width={150}
                height={200} // Adjust as needed
                objectFit="contain"
                className="w-fit"
              />
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section></section>
    </div>
  );
}
