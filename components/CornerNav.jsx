"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const monoBase = {
	fontFamily: '"DM Mono", "Courier New", monospace',
	fontSize: "0.6rem",
	letterSpacing: "0.1em",
	textTransform: "uppercase",
	lineHeight: 1.5,
};

const CATEGORIES = [
	{ label: "BUILD", href: "/build", color: "#C9904A" },
	{ label: "MARKET", href: "/market", color: "#8FAF7A" },
	{ label: "ESSAY", href: "/essay", color: "#C47A5A" },
	{ label: "NOTES", href: "/notes", color: "#A090C0" },
];

function CategoryLink({ href, label, color }) {
	const pathname = usePathname();
	const active = pathname === href;
	const [hovered, setHovered] = useState(false);

	return (
		<Link
			href={href}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			style={{
				...monoBase,
				color: hovered || active ? color : "var(--text-dim)",
				textShadow: hovered || active ? `0 0 12px ${color}60` : "none",
				transition: "color 0.3s ease, text-shadow 0.3s ease",
			}}
		>
			{active ? "» " : "  "}
			{label}
		</Link>
	);
}

export function CornerNav({ postCount }) {
	const pathname = usePathname();
	const isPost = pathname.startsWith("/posts/");
	const isCategory = ["/build", "/market", "/essay", "/notes"].includes(
		pathname,
	);

	return (
		<>
			{/* Top Left */}
			<div
				style={{
					position: "fixed",
					top: "1.5rem",
					left: "1.75rem",
					zIndex: 100,
				}}
			>
				<Link
					href="/"
					style={{
						fontFamily: '"Playfair Display", Georgia, serif',
						fontSize: "0.95rem",
						fontStyle: "italic",
						color: "var(--text)",
						opacity: pathname === "/" ? 1 : 0.65,
						transition: "opacity 0.3s ease",
						letterSpacing: "-0.01em",
					}}
				>
					avi jain
				</Link>
			</div>

			{/* Top Right */}
			<div
				style={{
					position: "fixed",
					top: "1.5rem",
					right: "1.75rem",
					zIndex: 100,
				}}
			>
				<nav
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-end",
						gap: "0.35rem",
					}}
				>
					{CATEGORIES.map((cat) => (
						<CategoryLink key={cat.label} {...cat} />
					))}
					<div
						style={{
							width: "100%",
							height: "1px",
							background: "var(--border)",
							margin: "0.15rem 0",
						}}
					/>

					<a
						href="https://github.com/postedbyavi"
						target="_blank"
						rel="noopener noreferrer"
						style={{
							...monoBase,
							color: "var(--text-dim)",
							transition: "color 0.3s ease",
						}}
						onMouseEnter={(e) =>
							(e.currentTarget.style.color = "var(--glow)")
						}
						onMouseLeave={(e) =>
							(e.currentTarget.style.color = "var(--text-dim)")
						}
					>
						github ↗
					</a>
				</nav>
			</div>

			{/* Bottom Left */}
			<div
				style={{
					position: "fixed",
					bottom: "1.5rem",
					left: "1.75rem",
					zIndex: 100,
				}}
			>
				<span style={{ ...monoBase, color: "var(--text-dim)" }}>
					{isPost || isCategory
						? "» writing"
						: `${postCount ?? ""} posts · summer 2026`}
				</span>
			</div>

			{/* Bottom Right */}
			<div
				style={{
					position: "fixed",
					bottom: "1.5rem",
					right: "1.75rem",
					zIndex: 100,
				}}
			>
				{isPost ? (
					<Link
						href="/"
						style={{
							...monoBase,
							color: "var(--text-muted)",
							transition: "color 0.3s ease",
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.color = "var(--text)";
							e.currentTarget.style.textShadow =
								"0 0 12px rgba(243,239,193,0.3)";
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.color = "var(--text-muted)";
							e.currentTarget.style.textShadow = "none";
						}}
					>
						← back
					</Link>
				) : (
					<Link
						href="/"
						style={{
							...monoBase,
							color:
								pathname === "/"
									? "var(--text-dim)"
									: "var(--text-muted)",
							transition: "color 0.3s ease",
						}}
					>
						[ home ]
					</Link>
				)}
			</div>
		</>
	);
}
