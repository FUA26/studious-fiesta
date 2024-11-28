"use client"

import { ChevronsDown, Github, Menu } from "lucide-react";
import React from "react";

import { Button } from "../ui/button";
import Link from "next/link";
import { ToggleTheme } from "./toogle-theme";
import { MobileNav } from "./mobile-nav";
import { DesktopNav } from "./mobile-desktop";
import { signOut } from "next-auth/react";
import Image from "../ui/image";


interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#team",
    label: "Team",
  },
  {
    href: "#contact",
    label: "Contact",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "Showcase Your Value ",
    description: "Highlight how your product solves user problems.",
  },
  {
    title: "Build Trust",
    description:
      "Leverages social proof elements to establish trust and credibility.",
  },
  {
    title: "Capture Leads",
    description:
      "Make your lead capture form visually appealing and strategically.",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-4 bg-card">
      <div className="flex">
        <div className="relative m-auto  aspect-[4/1] h-12">
          <Image
            className="rounded-2xl"
            src="/images/full-login.png"
            alt="Profile Image"
            fill
            enableTransition={false}
            enableLoading={false}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} routeList={routeList} />
      <DesktopNav routeList={routeList} featureList={featureList} />


      <div className="hidden lg:flex">
        <ToggleTheme />

        <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
          <Link
            aria-label="View on GitHub"
            href="https://github.com/nobruf/shadcn-landing-page.git"
            target="_blank"
          >
            <Github className="size-5" />
          </Link>
        </Button>
        <Button
          onClick={() => signOut({
            callbackUrl: "/" // redirect ke halaman home setelah logout
          })}
        >
          Logout
        </Button>
      </div>
    </header>
  );
};