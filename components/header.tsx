'use client'

import { useState } from 'react'
import Link from 'next/link'
import { DogIcon as Wolf, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import { menuItems } from '@/data'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  
  

  return (
    <header className="bg-black/80 backdrop-blur-lg text-white fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-5 ">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
     
     <Image src={'/logowhite.png'} alt='logo' width={'45'} height={'45'}></Image>
            <span className="text-xl font-bold font-serif
">Grey Wolf Media</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-gray-300 transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>
          <Button variant="outline" className="hidden md:inline-flex">
            Get a Quote
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-black/80 backdrop-blur-sm text-white">
              <SheetHeader>
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-6">
                {menuItems.map((item) => (
                  <Link
                    key={Math.random()}
                    href={item.href}
                    className="hover:text-gray-300 transition-colors text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button variant="outline" className="mt-4">
                  Get a Quote
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

