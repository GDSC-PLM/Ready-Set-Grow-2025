import Image from "next/image";

export default function ActionSection() {
  return (
    <section className="px-[20px] sm:px-[80px] md:px-[100px] xl:px-[150px] py-[150px] bg-[#FDEFE6] flex space-x-4 justify-around items-center">
      <div className="max-w-3xl">
        <h4
          className="text-[#30AC66] text-5xl font-black mb-10"
          style={{ textShadow: "-3px 3px 0px #000" }}
        >
          Shaping Careers for Growth
        </h4>
        <h5 className="text-lg mb-10 font-medium">
          We help students navigate their careers and unlock pathways to success
          by equipping them with deliberate, ethical, and imaginative strategies
          for professional growth. <br />
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
      <div className="lg:block hidden">
        <Image
          src="/images/assets/GDSC-Logo-Stylized.svg"
          alt="GDSC Logo"
          width={650}
          style={{ objectFit: "contain", minWidth: "400px" }}
          height={500}
        />
      </div>
    </section>
  );
}
