"use client";

import * as React from "react";
import Link from "next/link";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { ModeToggle } from "@/components/theme-toggler";

import { Button } from "../button";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import AnimatedGradientText from "../animated-gradient-text";
import { RainbowButton } from "../rainbow-button";
import { BorderBeam } from "../border-beam";
import { NeonGradientCard } from "../neon-gradient-card";
import Meteors from "../meteors";

// const navbuttoncss = "h-[5vh] text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2";

export default function NavigationBar() {
  return (
    <div className="w-[96vw] m-[2rem]">
      {/* <Meteors number={30} /> */}
    <NeonGradientCard className="">

      <div className="flex  items-center">
      

      <div className="absolute top-1 right-2 w-[50px] h-[50px] flex items-center justify-center bg-transparent ">
        <ModeToggle />
      </div>

      <NavigationMenu className="flex h-[8vh] pl-[3rem]">
        <NavigationMenuList className="flex  gap-[7vw] ">
          <NavigationMenuItem>
            <RainbowButton>Getting started</RainbowButton>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <RainbowButton>Components</RainbowButton>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink>
                <RainbowButton>Documentation</RainbowButton>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>



      <div className="absolute right-[4vw]">
        <SignedOut>
          <div className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300">
            <SignInButton />
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox:
                  "h-[9vh]  w-[5vw]  m-[2vh] bg-blue-500 border-2 border-red-500",
                userButtonPopoverCard: "shadow-lg rounded-lg",
              },
            }}
          />
        </SignedIn>
      </div>
      
      <BorderBeam />
      </div>
    </NeonGradientCard>
    </div>
  );
}
