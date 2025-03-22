import Image from "next/image";

export default function LandingSection() {
  return (
    <section className="px-[20px] sm:px-[80px] md:px-[100px] xl:px-[150px] py-[100px] mb-4 flex w-full justify-center lg:justify-between items-center">
      <div>
        <h4 className="text-[#848484] mb-4 text-lg">
          Google Developer Groups on Campus - PLM presents
        </h4>
        <Image
          src="/images/assets/RSG-Landing.svg"
          alt="RSG Theme"
          width={650}
          style={{ objectFit: "contain" }}
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
          style={{ objectFit: "contain" }}
          height={400}
        />
      </div>
    </section>
  );
}
