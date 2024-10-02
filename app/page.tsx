"use client";
import Image from "next/image";
import NavBar from "./_components/navbar";
import benefixFixTap from "@/assets/images/benefix-fixtap.jpg";
import { Button } from "@/components/ui/button";
import { ChevronsRight, Clock3 } from "lucide-react";
import whoWeAre from "@/assets/images/benefix-who-we-are.jpg";
import benefixTiktok from "@/assets/images/benefix-tiktok.jpg";
import benefixMultinational from "@/assets/images/benefix-multinational.jpg";
import earningModel from "@/assets/images/benefix-earning-model.jpg";
import { useState } from "react";
import benefixCac from "@/assets/images/benefix-cac.jpg";
import { Users } from "lucide-react";
import tiktok from "@/assets/images/tiktok-icon.png";
import whatsapp from "@/assets/images/whatsapp-icon.png";
import telegram from "@/assets/images/telegram-icon.png";
import Logo from "@/assets/images/benefix-logo.png";
import Link from "next/link";

import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from "@/components/ui/dialog";

export default function Home() {
	const [selectedPackage, setSelectedPackage] = useState("silver");
	const [isOpen, setIsOpen] = useState(false);
	const [regModalOpen, setRegModalOpen] = useState(false);

	return (
		<div className="p-4 benefix-container">
			<NavBar isOpen={regModalOpen} setIsOpen={setRegModalOpen} />

			<div className="rounded-xl overflow-hidden relative w-full mt-7">
				<Image
					src={benefixFixTap}
					alt="benefix-me"
					className="w-full md:aspect-[1/0.7]"
				/>
				<div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent opacity-80" />
				<Dialog open={isOpen} onOpenChange={setIsOpen}>
					<DialogTrigger asChild>
						<Button
							size="lg"
							className="absolute bottom-14 left-10 bg-gradient-to-r from-[#FBA512] to-[#FB8412] text-black gap-2 hover:bg-gray-200"
						>
							<span>How it works</span>
							<ChevronsRight />
						</Button>
					</DialogTrigger>
					<DialogContent className="border-gray-800 bg-black">
						<DialogHeader className="grid gap-4">
							<DialogTitle className="text-3xl">How It Works</DialogTitle>
							<DialogDescription className="text-white grid gap-4">
								<p>
									Benefix is simply a smart online job/social advert business
									that pays every week, for doing these 👇🏽👇🏽
								</p>

								<ol className="list-decimal grid gap-4 px-4">
									<li>
										For Engaging on TikTok and Facebook posts to earn ₦1,200
										every day.
									</li>
									<li>Performing Simple social Tasks</li>
									<li>
										Working Advert Jobs for Foreign brands to earn every week.
									</li>
								</ol>
								<p>
									The best part is that Benefix Has Partnered with FaceBook,
									Instagram and TikTok so that you can Monetise their social
									media accounts and get paid every week.. You can make as much
									as ₦60,000 or more every week once you register on Benefix....
									And all you need for Benefix is your WhatsApp, or any other
									social media accounts you have... (Referral is Optional 💯)
								</p>
								<p>benefix</p> 
							</DialogDescription>
						</DialogHeader>
						<DialogFooter>
							<Button
								className="w-full bg-white text-black hover:bg-gray-300"
								onClick={() => setRegModalOpen(true)}
							>
								Click here to Register
							</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>

			<div id="#about" className="mt-32">
				<h1 className=" text-5xl md:text-7xl font-bold">Who we are?</h1>

				<div className="px-10 py-10 bg-[hsla(182,_71%,_9%,_0.8)] mt-4 rounded-3xl border border-gray-800">
					<p className="text mt-4">
						At benefix we are pioneers of the digital economy, committed to
						empowering individuals to achieve financial freedom through the
						strategic use of social media.
					</p>
					<p className="text mt-4">
						Our team is made up of digital marketing experts, financial
						strategists, and technology enthusiasts who understand the power of
						online platforms in shaping financial futures.
					</p>
					<p className="text mt-4">
						We believe in the limitless potential of the digital world and we
						are here to guide our users in harnessing the potential to create
						real sustainable income.
					</p>
					<p className="text mt-4">
						Our mission is to inspire, educate, and equip our users with the
						tools and knowledge they need to thrive in the digital landscape. By
						leveraging the power of TikTok, Facebook, and Instagram, we aim to
						transform the way people think about earning online, turning
						everyday social media activities into profitable ventures.
					</p>
				</div>
			</div>

			<div className="mt-7 rounded-xl overflow-hidden relative">
				<Image
					src={whoWeAre}
					alt="Benefix tiktok"
					className="w-full md:aspect-[1/0.7]"
				/>
			</div>

			<div className="mt-32">
				<div className="flex justify-center">
					<Button
						size="lg"
						className="gap-2 items-center rounded-full bg-[hsla(182,_71%,_9%,_0.5)] border border-gray-500"
					>
						<Clock3 size={16} />
						<span>waitlist</span>
					</Button>
				</div>
			</div>

			<div className="mt-7 rounded-xl overflow-hidden relative">
				<Image
					src={benefixTiktok}
					alt="Benefix tiktok"
					className="w-full md:aspect-[1/0.7]"
				/>
			</div>

			<div className="mt-32">
				<div className="flex justify-center">
					<Button
						size="lg"
						className="gap-2 items-center rounded-full  bg-[hsla(182,_71%,_9%,_0.5)] border border-gray-500"
					>
						<Clock3 size={16} />
						<span>what you would get</span>
					</Button>
				</div>

				<div className="mt-7 rounded-xl overflow-hidden relative">
					<Image
						src={benefixTiktok}
						alt="Benefix tiktok"
						className="w-full md:aspect-[1/0.7]"
					/>
				</div>

				<div className="mt-7 px-4">
					<h1 className=" text-3xl md:text-4xl font-bold">
						Here's how you can earn on Benefix, once you get Registered
					</h1>

					<ol className="list-decimal mt-7 grid gap-4 px-4">
						<li>
							Once you get Registered, you receive an Enrollment Cashback of
							₦5,000, which you can withdraw anytime.
						</li>

						<li>
							You can do the Daily TikTok Social Job to get an extra ₦1,200
							daily.
						</li>

						<li>You can play Benefix games and win up to ₦25,000 weekly.</li>

						<li>
							You can participate in daily Spillover Earnings, daily Benefix
							Tenacious Rewards, Spin to Win, and Weekly TikTok challenge to win
							amazing prizes 😍
						</li>
					</ol>

					<p className="mt-7">
						WITHRAWAL IS THREE TIMES A WEEK WITH MINIMUM OF ₦10,000 Now,
						Registration fee is a One-time payment of ₦7,000.... AND AFTER
						REGISTRATION, YOU WILL GET ADDED TO THE VIP GROUP WHERE I'LL TEACH
						YOU HOW TO MAKE ₦60K to ₦80K WEEKLY
					</p>

					<Button
						onClick={() => setRegModalOpen(true)}
						size="lg"
						className="bg-gradient-to-r from-[#FBA512] to-[#FB8412] w-full max-w-64 text-black mt-7 hover:bg-gray-200"
					>
						Click here to Register
					</Button>
				</div>
			</div>

			<div className="mt-32">
				<div className="flex justify-center">
					<Button
						size="lg"
						className="gap-2 items-center rounded-full bg-[hsla(182,_71%,_9%,_0.5)] border border-gray-500"
					>
						<Clock3 size={16} />
						<span>We are multinational</span>
					</Button>
				</div>

				<div className="mt-7 rounded-xl overflow-hidden relative w-full">
					<Image
						src={benefixMultinational}
						alt=" multinational"
						className="w-full md:aspect-[1/0.7]"
					/>
				</div>
			</div>

			<div className="mt-32">
				<div className="flex justify-center">
					<Button
						size="lg"
						className="gap-2 items-center rounded-full bg-[hsla(182,_71%,_9%,_0.5)] border border-gray-500"
					>
						<Clock3 size={16} />
						<span>See our earning model</span>
					</Button>
				</div>

				<div className="mt-7 rounded-xl overflow-hidden relative w-full">
					<Image
						src={earningModel}
						className="w-full md:aspect-[1/0.7]"
						alt="package images"
					/>
				</div>
			</div>

			<div className="mt-32">
				<div className="flex justify-center">
					<Button
						size="lg"
						className="gap-2 items-center rounded-full bg-[hsla(182,_71%,_9%,_0.5)] border border-gray-500"
					>
						<Clock3 size={16} />
						<span>we are registered</span>
					</Button>
				</div>

				<div className="mt-7 rounded-xl overflow-hidden relative w-full">
					<Image
						src={benefixCac}
						className="w-full md:aspect-[1/0.7]"
						alt="package images"
					/>
				</div>
			</div>

			<div className="mt-14 flex flex-col justify-center items-center">
				<Button className="bg-[hsla(182,_71%,_9%,_0.5)]  border border-gray-500 rounded-full justify-center px-4 py-2 min-w-[150px] flex-row gap-x-2 items-center">
					<Clock3 size={16} />
					<span className="text-white text-base font-bold">Join Us</span>
				</Button>

				<div className="flex gap-x-2 mt-7">
					<Button
						className="bg-[hsla(182,_71%,_9%,_0.5)] h-full hover:bg-gray-900 p-4 border border-gray-500 rounded-lg"
					>
						<a
							href="https://wa.me/2349139943683?text=I+want+to+pay+for+Benefix+Registration"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src={whatsapp}
								className="w-[30px] h-[30px]"
								alt="whatsapp image"
							/>
						</a>
					</Button>
					<div className="bg-[hsla(182,_71%,_9%,_0.5)] p-4 border border-gray-500 rounded-lg">
						<Image
							src={telegram}
							className="w-[30px] h-[30px]"
							alt="telegram icon"
						/>
					</div>
					<div className="bg-[hsla(182,_71%,_9%,_0.5)] p-4 border border-gray-500 rounded-lg">
						<Image
							src={tiktok}
							className="w-[30px] h-[30px]"
							alt="tiktok icon"
						/>
					</div>
					<div className="bg-[hsla(182,_71%,_9%,_0.5)] p-4 border border-gray-500 rounded-lg">
						<Users />
					</div>
				</div>
			</div>

			<div className="w-[170px] relative h-[50px] mx-auto mt-7">
				<Image
					src={Logo}
					alt="logo"
					className="w-full h-full absolute object-cover"
				/>
			</div>

			<div className="flex flex-col items-center justify-center mt-7">
				<p className="text-white text-center text-base">
					All rights reserved @Benefix 2024
				</p>

				<Link href="/legal/privacy-policy" className="mt-4 block underline">
					Privacy policy
				</Link>
			</div>
		</div>
	);
}