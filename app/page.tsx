import { addContact } from "@/serverActions";
import Button from "./Button";

interface Contact {
  name: string;
  email: string;
  id?: number;
}

export default async function Home() {
  const response = await fetch(
    "https://6512cf67b8c6ce52b39646cf.mockapi.io/contacts",
    {
      cache: "no-cache",
      next: {
        tags: ["contacts"]
      }
    }
  );
  const contacts: Contact[] = await response.json();

  return (
    <main className="main">
      <h2>Contacts App</h2>
      <form action={addContact}>
        <input type="text" name="name" placeholder="Enter Name..." required />
        <input type="email" name="email" placeholder="Enter Email..." required />
        <Button />
      </form>
      <section>
        {contacts
          ? contacts.map((contact, index) => (
              <div key={index}>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
            ))
          : "no contacts yet!"}
      </section>
    </main>
  );
}

