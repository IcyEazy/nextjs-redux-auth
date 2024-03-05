"use client";

import LogIn from "@/components/log-in";

export default function Home() {
  return (
    <main className="bg-[#434343] text-white flex min-h-screen flex-col items-center gap-5 p-24">
      <h1 className="font-semibold text-center text-2xl">
        Welcome To My Nextjs/ReduxToolkit Exercise
      </h1>
      <p className="text-center text-lg">
        Please fill the input fields and click on the submit button to go to the
        next page, thank you.
      </p>
      <LogIn />
    </main>
  );
}
