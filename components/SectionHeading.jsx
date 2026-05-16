"use client";

import { useState } from "react";

export function SectionHeading({ children, color }) {
	const [hov, setHov] = useState(false);
	return (
		<div
			style={{
				display: "flex",
				alignItems: "baseline",
				gap: "0.6rem",
				marginTop: "2.75rem",
				marginBottom: "0.9rem",
			}}
		>
			<span
				style={{
					fontFamily: '"DM Mono", monospace',
					fontSize: "0.75rem",
					color,
					opacity: 0.8,
					flexShrink: 0,
					textShadow: `0 0 10px ${color}80`,
					lineHeight: 1,
					paddingTop: "0.15rem",
				}}
			>
				»
			</span>
			<h2
				onMouseEnter={() => setHov(true)}
				onMouseLeave={() => setHov(false)}
				style={{
					fontFamily: '"Playfair Display", Georgia, serif',
					fontSize: "1.2rem",
					fontWeight: 500,
					letterSpacing: "-0.015em",
					color: "var(--text)",
					margin: 0,
					textShadow: hov
						? `0 0 20px rgba(243,239,193,0.25)`
						: "none",
					transition: "text-shadow 0.4s ease",
					cursor: "default",
					lineHeight: 1.3,
				}}
			>
				{children}
			</h2>
		</div>
	);
}
