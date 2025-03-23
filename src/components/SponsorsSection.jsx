import Image from "next/image";
import { sponsors } from "@/data/sponsors";

export default function SponsorsSection() {
  return (
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
              width={150}
              height={200} // Adjust as needed
              style={{ objectFit: "contain" }}
              className="w-fit"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
