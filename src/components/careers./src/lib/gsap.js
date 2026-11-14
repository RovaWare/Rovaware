import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);

// The signature easing used across the reference site
CustomEase.create("still", "0.22, 1, 0.36, 1");
CustomEase.create("stillInOut", "0.76, 0, 0.24, 1");

gsap.defaults({ ease: "still", duration: 1 });

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export { gsap, ScrollTrigger };
