import { type MetaFunction } from "@remix-run/node";
import Hero from "~/components/Hero";
import MainFeatures from "~/components/MainFeatures";
import Testimonials from "~/components/Testimonials";

export const meta: MetaFunction = () => {
  return [
    { title: "Game Library" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Landing() {
  return (
    <>
      <Hero />
      {/* Features */}
      <MainFeatures />
      <Testimonials />
    </>
  );
}
