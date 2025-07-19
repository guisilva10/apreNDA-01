"use client";

import { signOut } from "next-auth/react";
import { Button } from "../_components/ui/button";

const LogOutButton = () => {
  return <Button onClick={() => signOut()}>Sair da conta</Button>;
};

export default LogOutButton;
