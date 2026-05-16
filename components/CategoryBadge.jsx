"use client";

import { useState } from "react";

export const CATEGORY_META = {
	build: { abbr: "BUILD", color: "#C9904A" },
	market: { abbr: "MARKET", color: "#8FAF7A" },
	essay: { abbr: "ESSAY", color: "#C47A5A" },
	notes: { abbr: "NOTES", color: "#A090C0" },
};

export function CategoryBadge({ category, size = "sm", interactive = false }) {
	const meta =
		CATEGORY_META[category?.toLowerCase()] || CATEGORY_META["notes"];
	const [hov, setHov] = useState(false);
	const fontSize = size === "md" ? "0.7rem" : "0.62rem";

	return (
		<span
			onMouseEnter={() => interactive && setHov(true)}
			onMouseLeave={() => interactive && setHov(false)}
			style={{
				display: "inline-flex",
				alignItems: "center",
				gap: "0.4rem",
				fontFamily: '"DM Mono", "Courier New", monospace',
				fontSize,
				letterSpacing: "0.1em",
				textTransform: "uppercase",
				color: meta.color,
				textShadow: hov ? `0 0 16px ${meta.color}80` : "none",
				transition: "text-shadow 0.35s ease",
				cursor: interactive ? "pointer" : "default",
				lineHeight: 1,
			}}
		>
			<span
				style={{
					display: "inline-block",
					width: size === "md" ? "5px" : "4px",
					height: size === "md" ? "5px" : "4px",
					borderRadius: "50%",
					background: meta.color,
					opacity: 0.75,
					flexShrink: 0,
					boxShadow: hov ? `0 0 8px ${meta.color}` : "none",
					transition: "box-shadow 0.35s ease",
				}}
			/>
			{meta.abbr}
		</span>
	);
}
