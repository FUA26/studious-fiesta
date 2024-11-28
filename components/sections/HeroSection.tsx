import React from "react";
import HeroHeaderSection from "./HeroHeaderSection";
import MainButton from "../common/MainButton";
import { cn } from "@/lib/utils";
import { gilroyBold } from "@/lib/utils";
import { HeroYoutubeModal } from "../modals/HeroYoutubeModal";

function HeroSection() {
  return (
    <section>
      <HeroHeaderSection />
      <div>
        <div
          className={cn(
            gilroyBold.className,
            "text-4xl md:text-[55px] text-center text-primary md:leading-[4rem] my-8"
          )}
        >
          Satu <span className="text-accent">Identitas</span>,<br /> Semua Aplikasi dan Layanan
        </div>

        <p className="mb-8 text-[22px] text-center text-[#31373D]">
        Kelola semua akun Anda dalam satu platform,<br /> memberikan Anda kemudahan untuk akses Aplikasi dan Layanan Kabupaten Malang.
        </p>



        <div className="flex w-full justify-center">
          <HeroYoutubeModal />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
