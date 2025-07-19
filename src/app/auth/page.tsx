import { Button } from "../_components/ui/button";
import { FaGoogle } from "react-icons/fa6";

export default function Page() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      Login Page
      <Button>
        Fazer login com <FaGoogle className="size-4" />
      </Button>
    </main>
  );
}
