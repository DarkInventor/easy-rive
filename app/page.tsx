"use client"

import Link from "next/link"
import { useRive } from "@rive-app/react-canvas";

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import animationFile from '@/components/bento-section.riv';

export default function IndexPage() {
  const { RiveComponent } = useRive({
    src: animationFile,
    stateMachines: "State Machine 1",
    autoplay: true,
    onLoadError: (e) => console.log("Error loading Rive file", e),
  });
  return (
    <div className="mx-auto flex h-auto w-full justify-center text-center md:h-[900px] lg:h-[1200px] xl:h-[1200px]">
      <RiveComponent />
    </div>
  )
}
