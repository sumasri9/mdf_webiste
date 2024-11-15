"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/components/Logo';

export default function MDFRoom() {
  const router = useRouter();

  useEffect(() => {
    if (!sessionStorage.getItem('loggedIn')) {
      router.push('/login');
    }

    const handleMouseMove = (e) => {
      const cursor = document.querySelector('.cursor');
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-500 via-pink-400 to-yellow-300 text-gray-800 relative">
      <Logo />
      <h1 className="text-4xl font-semibold mb-6 text-white tracking-wide">MDF Room</h1>
      <div className="space-y-4">
        <Link href="/new_product">
          <button className="block px-6 py-3 bg-white text-gray-700 rounded-lg shadow-md text-center hover:bg-gray-100 transition duration-300">New Product</button>
        </Link>
        <button className="block w-full px-6 py-3 bg-white text-gray-700 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">Add items to an Existing Product</button>
        <button className="block w-full px-6 py-3 bg-white text-gray-700 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">Borrow Items from MDF Room</button>
      </div>
      <div className="cursor w-3 h-3 bg-yellow-500 rounded-full fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2 shadow-lg"></div>
    </div>
  );
}
