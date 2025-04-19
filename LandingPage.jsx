import { useState } from "react";
import { Button } from "./Button";
import { Card, CardContent } from "./Card";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks! We'll keep you posted at ${email}`);
    setEmail("");
  };

  return (
    <main className="bg-white text-gray-900 font-sans">
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-emerald-100 to-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Borrow Tools. Save Money.<br />Free Up Space.
        </h1>
        <p className="max-w-xl text-lg md:text-xl mb-8">
          ANU Tool Library offers 24 h self-service access to clean, well-maintained tools for as little as{" "}
          <span className="font-semibold">1 AUD per use</span>.
        </p>
        <Button
          className="px-8 py-6 text-xl"
          onClick={() =>
            document.getElementById("signup").scrollIntoView({ behavior: "smooth" })
          }
        >
          Join the Wait-list
        </Button>
      </section>
    </main>
  );
}