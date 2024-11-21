"use client";

// pages/login.js
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    if (username === "user" && password === "password") {
      sessionStorage.setItem("loggedIn", "true");
      router.push("/");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-red-600 to-cream-200 font-roboto text-gray-800 relative">
      <div className="absolute top-12 left-12">
        <Image
          src="/images/logo_white_413.png"
          alt="Logo"
          width={250}
          height={200}
          className="w-64 h-52"
        />
      </div>
      <div className="text-center text-white space-y-6">
        <h2 className="text-3xl font-semibold">
          Please provide your credentials to get in
        </h2>
        <form
          id="loginForm"
          className="flex flex-col space-y-4 w-72"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            className="p-2 rounded-lg border border-gray-300 text-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="p-2 rounded-lg border border-gray-300 text-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="p-2 text-lg font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      </div>
    </div>
  );
}
