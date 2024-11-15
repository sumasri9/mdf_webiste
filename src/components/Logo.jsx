// components/Logo.js
import Image from "next/image";

export default function Logo() {
  return (
    <div className="absolute top-8 left-8 w-16 h-16">
      {" "}
      {/* Adjusted width and height */}
      <Image
        src="/images/logo_white_413.png"
        alt="Logo"
        width={64} // Adjusted for better scaling
        height={64} // Adjusted for better scaling
        className="object-contain" // Ensures the logo fits well in the container
      />
    </div>
  );
}
