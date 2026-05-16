"use client";

import { useState } from "react";
import Link from "next/link";
import { CategoryBadge } from "./CategoryBadge";

function formatDate(iso) {
	return new Date(iso).toLocaleDateString("en-GB", {
		day: "2-digit",
		month: "short",
		year: "numeric",
	});
}

export default function PostCard({
	slug,
	title,
	date,
	category,
	summary,
	readTime,
	tags,
	showDivider,
}) {
	const [hovered, setHov] = useState(false);

	return (
		<>
			{showDivider && (
				<div
					style={{
						height: "1px",
						background:
							"linear-gradient(to right, transparent, var(--border) 20%, var(--border) 80%, transparent)",
					}}
				/>
			)}

			<article
				onMouseEnter={() => setHov(true)}
				onMouseLeave={() => setHov(false)}
				style={{
					padding: "2rem 1.5rem",
					position: "relative",
					overflow: "hidden",
				}}
			>
				{/* Atmospheric glow layer */}
				<div
					style={{
						position: "absolute",
						left: "50%",
						top: "50%",
						width: "170%",
						height: "170%",
						transform: hovered
							? "translate(-50%, -50%) scale(1)"
							: "translate(-50%, -50%) scale(0.94)",
						background:
							"radial-gradient(circle, rgba(203,170,106,0.11) 0%, rgba(203,170,106,0.06) 18%, rgba(203,170,106,0.025) 34%, rgba(203,170,106,0.008) 48%, rgba(203,170,106,0.002) 58%, transparent 68%)",
						filter: "blur(58px)",
						opacity: hovered ? 1 : 0,
						transition:
							"opacity 0.8s ease, transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)",
						pointerEvents: "none",
						zIndex: 0,
					}}
				/>

				{/* Content */}
				<div style={{ position: "relative", zIndex: 1 }}>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: "0.75rem",
						}}
					>
						<CategoryBadge category={category} />

						<span
							style={{
								fontFamily: '"DM Mono", monospace',
								fontSize: "0.58rem",
								color: "var(--text-dim)",
								letterSpacing: "0.08em",
							}}
						>
							{formatDate(date)}
						</span>
					</div>

					<div
						style={{
							display: "flex",
							alignItems: "flex-start",
							justifyContent: "space-between",
							gap: "1rem",
						}}
					>
						<Link href={`/posts/${slug}`}>
							<h2
								style={{
									fontFamily:
										'"Playfair Display", Georgia, serif',
									fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
									fontWeight: 400,
									lineHeight: 1.3,
									letterSpacing: "-0.02em",
									color: "var(--text)",
									margin: "0 0 0.6rem 0",
									textShadow: hovered
										? "0 0 18px rgba(243,239,193,0.16), 0 0 38px rgba(203,170,106,0.08)"
										: "none",
									transform: hovered
										? "scale(1.015)"
										: "scale(1)",
									transformOrigin: "left top",
									transition:
										"text-shadow 0.5s ease, transform 0.5s ease",
									display: "inline-block",
								}}
							>
								{title}
							</h2>
						</Link>

						<span
							style={{
								fontFamily: '"DM Mono", monospace',
								fontSize: "0.65rem",
								color: "var(--glow)",
								opacity: hovered ? 0.7 : 0,
								transform: hovered
									? "translateX(0)"
									: "translateX(-6px)",
								transition:
									"opacity 0.4s ease, transform 0.4s ease",
								paddingTop: "0.2rem",
								flexShrink: 0,
							}}
						>
							→
						</span>
					</div>

					<p
						style={{
							fontFamily: '"EB Garamond", Georgia, serif',
							fontSize: "0.95rem",
							lineHeight: 1.75,
							color: "var(--text-muted)",
							margin: "0 0 0.9rem 0",
							fontStyle: "italic",
						}}
					>
						{summary}
					</p>

					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "1.25rem",
							flexWrap: "wrap",
						}}
					>
						<span
							style={{
								fontFamily: '"DM Mono", monospace',
								fontSize: "0.58rem",
								color: "var(--text-faint)",
								letterSpacing: "0.08em",
							}}
						>
							{readTime}
						</span>

						<div
							style={{
								display: "flex",
								gap: "0.6rem",
								flexWrap: "wrap",
							}}
						>
							{tags?.slice(0, 3).map((tag) => (
								<span
									key={tag}
									style={{
										fontFamily: '"DM Mono", monospace',
										fontSize: "0.56rem",
										color: "var(--text-faint)",
										letterSpacing: "0.06em",
									}}
								>
									{tag}
								</span>
							))}
						</div>
					</div>
				</div>
			</article>
		</>
	);
}
