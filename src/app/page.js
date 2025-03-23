import React from "react";

import Image from "next/image";
import { sponsors } from "../data/sponsors";
import LandingSection from "@/components/LandingSection";
import ActionSection from "@/components/ActionSection";
import SponsorsSection from "@/components/SponsorsSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <div className="">
      <LandingSection />
      <ActionSection />
      <SponsorsSection />
      <FAQSection />
    </div>
  );
}
