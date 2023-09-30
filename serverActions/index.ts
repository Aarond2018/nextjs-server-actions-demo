"use server";

import { revalidateTag } from "next/cache";

export const addContact = async (e: FormData) => {
  const name = e.get("name");
  const email = e.get("email");

  /* validate form inputs */

  await fetch("https://65178c77582f58d62d34fe8c.mockapi.io/contacts", {
    method: "POST",
    body: JSON.stringify({ name, email }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  revalidateTag("contacts");
};
