import { Menu, ChevronRight, Calendar, Users, Folder, Book } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "../../../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../../../components/ui/sheet";
import { useState } from 'react';

export default function Navbar({ activeSection, setActiveSection }) {
  const navItems = [
    { name: 'Overview', icon: ChevronRight },
    { name: 'Events', icon: Calendar },
    { name: 'Projects', icon: Folder },
    { name: 'Members', icon: Users },
    { name: 'Resources', icon: Book },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="GDSC Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-bold text-xl text-blue-600">GDSC</span>
        </Link>
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => setActiveSection(item.name)}
                className={`flex items-center space-x-1 text-sm font-medium transition-all duration-200 ease-in-out ${
                  activeSection === item.name ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveSection(item.name)}
                  className={`flex items-center space-x-2 text-lg font-medium transition-all duration-200 ease-in-out ${
                    activeSection === item.name ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
