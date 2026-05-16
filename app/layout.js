import { Playfair_Display, EB_Garamond, DM_Mono } from "next/font/google";
import "./globals.css";
import { PageTransition } from "@/components/PageTransition";

const playfair = Playfair_Display({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	style: ["normal", "italic"],
	variable: "--font-display",
});

const garamond = EB_Garamond({
	subsets: ["latin"],
	weight: ["400", "500", "600"],
	style: ["normal", "italic"],
	variable: "--font-serif",
});

const dmMono = DM_Mono({
	subsets: ["latin"],
	weight: ["300", "400", "500"],
	style: ["normal", "italic"],
	variable: "--font-mono",
});

export const metadata = {
	title: "blog | avi jain",
	description: "Notes from the workbench & margin",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			data-scroll-behavior="smooth"
			className={`${playfair.variable} ${garamond.variable} ${dmMono.variable}`}
		>
			<body>
				<PageTransition>{children}</PageTransition>
			</body>
		</html>
	);
}
