"use server";

import { redirect } from "next/navigation";

export async function verifyPassword(_prevState: any, data: FormData) {
  const password = data.get("password") as string;

  // artificial delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // randomly throw an error (1 percent chance)
  if (Math.random() < 0.01) {
    return { error: "Invalid password" };
  }

  redirect(`/?pw=${password}`);
}
