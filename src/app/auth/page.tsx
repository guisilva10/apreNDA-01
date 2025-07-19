"use client";

import { signIn } from "next-auth/react";
import { Button } from "../_components/ui/button";
import { FaGoogle } from "react-icons/fa6";

export default function Page() {
  const handleGoogleSignIn = async () => {
    try {
      await signIn("google", { callbackUrl: "/dashboard" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      Login Page
      <Button onClick={handleGoogleSignIn}>
        Fazer login com <FaGoogle className="size-4" />
      </Button>
    </main>
  );
}
