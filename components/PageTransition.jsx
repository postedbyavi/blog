"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export function PageTransition({ children }) {
	const pathname = usePathname();

	return (
		<motion.div
			key={pathname}
			style={{
				minHeight: "100vh",
				overflow: "hidden",
			}}
			initial={{
				opacity: 0,
				y: 12,
				filter: "blur(6px) brightness(0.4)",
			}}
			animate={{
				opacity: 1,
				y: 0,
				filter: "blur(0px) brightness(1)",
			}}
			transition={{
				duration: 0.8,
				ease: [0.22, 0.1, 0.36, 1],
				opacity: { duration: 0.7 },
				filter: { duration: 0.9 },
				y: { duration: 0.6 },
			}}
		>
			{children}
		</motion.div>
	);
}
