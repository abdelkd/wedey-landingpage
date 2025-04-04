import { ChevronDown, User } from 'lucide-react';
import Image from 'next/image'

import { Button, buttonVariants } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

// const navLinks = [
//     { text: 'For Companies' },
//     { text: 'For Talents' },
//     { text: 'About Us' },
//     { text: 'Blog' },
// ]

// TODO: add onhover/onclick component 'For companies' 'For talents'...
export default function Navbar() {
    return <div className="border-b border-slate-50 shadow-xs flex items-center justify-between px-8 h-16">
        <div>
            <Image src="/logo.webp" width={128} height={64} alt="logo" />
        </div>
        <div className="flex gap-6">
            <div><p className="hidden text-zinc-800 text-md md:flex gap-1">For Companies <ChevronDown /></p></div>
            <div><p className="hidden text-zinc-800 text-md md:flex gap-1">For Talents <ChevronDown /></p></div>
            <div><p className="hidden text-zinc-800 text-md md:flex gap-1">About Us <ChevronDown /></p></div>
            <div><p className="hidden text-zinc-800 text-md md:hidden">Blog</p></div>
        </div>
        <div className="h-10 flex items-center gap-3">
        <DropdownMenu>
            <DropdownMenuTrigger className={buttonVariants({ variant: 'outline' })}>
                <User />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel className="font-semibold">Company</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Sign In</DropdownMenuItem>
                <DropdownMenuItem className="pb-3">Sign Up</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="font-semibold">User</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Sign In</DropdownMenuItem>
                <DropdownMenuItem>Sign Up</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        <Button>
            Hire Talents
        </Button>
        </div>
    </div>
}