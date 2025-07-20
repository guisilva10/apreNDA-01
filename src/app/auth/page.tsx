"use client";

import { signIn } from "next-auth/react";
import { Button } from "../_components/ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa6";

export default function Page() {
  const handleGoogleSignIn = async () => {
    try {
      await signIn("google", { callbackUrl: "/dashboard" });
    } catch (error) {
      console.log(error);
    }
  };
  const handleGithubSignIn = async () => {
    try {
      await signIn("github", { callbackUrl: "/dashboard" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center space-y-8">
      <h1>Login Page</h1>
      <Button onClick={handleGoogleSignIn}>
        Fazer login com <FaGoogle className="size-4" />
      </Button>
      <Button onClick={handleGithubSignIn}>
        Fazer login com <FaGithub className="size-4" />
      </Button>
    </main>
  );
}
