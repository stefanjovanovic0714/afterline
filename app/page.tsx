import { CloseCta } from "@/app/components/CloseCta";
import { Faq } from "@/app/components/Faq";
import { Hero } from "@/app/components/Hero";
import { HowItWorks } from "@/app/components/HowItWorks";
import { Industries } from "@/app/components/Industries";
import { Problem } from "@/app/components/Problem";
import { Trust } from "@/app/components/Trust";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="rule" />
      <Problem />
      <HowItWorks />
      <Industries />
      <Trust />
      <Faq />
      <CloseCta />
    </>
  );
}
