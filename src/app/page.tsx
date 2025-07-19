import Link from "next/link";
import { buttonVariants } from "./_components/ui/button";

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      Home Page
      <Link href="/auth" className={buttonVariants({ variant: "outline" })}>
        Fazer login
      </Link>
    </main>
  );
}
