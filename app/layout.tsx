import type { Metadata } from "next";
import localFont from "next/font/local";
import GoogleAnalytics from "./_components/google-analytics";
import "./globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Benefix - poineers of digital economy",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta
					name="google-site-verification"
					content="wJiconMJ_tckEIVtlKBGa0zp3y71AXBexP80QrCDbKI"
				/>
				<GoogleAnalytics />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
