import { auth } from "@/auth";

import Link from "next/link";
import BubbleUpButton from "./bubble-up-button";
import OutlineButton from "./outline-button";

export default async function Hero() {
  const session = await auth();
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-8">
          {/* <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-9xl">
              Your Academic Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcase your projects. Build your portfolio. Get discovered by
              recruiters.
            </p>
          </div> */}

          {!session && (
            <div className="space-y-6">
              <div className="flex gap-4 justify-center">
                <Link href="/register">
                  <BubbleUpButton>Get Started</BubbleUpButton>
                </Link>
                <Link href="/login">
                  <OutlineButton variant="outline">Sign In</OutlineButton>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground">
                Exclusively for students with .ac.lk university email addresses
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
