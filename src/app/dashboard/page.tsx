import { auth } from "@/services/auth";
import { redirect } from "next/navigation";
import LogOutButton from "./logout-button";

export default async function Page() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/auth");
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      Hello {session.user.id}
      <LogOutButton />
    </div>
  );
}
