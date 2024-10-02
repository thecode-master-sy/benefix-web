import Logo from "@/assets/images/benefix-logo.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronsRight, UserPlus } from "lucide-react";
import Link from "next/link";
import tiktok from "@/assets/tiktok-icon.png";
import whatsapp from "@/assets/whatsapp-icon.png";
import telegram from "@/assets/telegram-icon.png";
import { Users } from "lucide-react";

export default function NavBar({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<nav className="flex justify-between items-center">
			<div className="w-[170px] relative h-[50px]">
				<Image
					src={Logo}
					alt="logo"
					className="w-full h-full absolute object-cover"
				/>
			</div>

			<div className="hidden md:block">
				<ul className="flex gap-7 items-center">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#services">Services</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</div>

			<Button
				className="bg-gradient-to-r from-[#FBA512] to-[#FB8412] text-black gap-2 hover:bg-gray-200"
				asChild
			>
				<Link href="/register">
					<UserPlus size={16} />
					<span>Register</span>
				</Link>
			</Button>
		</nav>
	);
}
