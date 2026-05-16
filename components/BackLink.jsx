"use client";

import Link from "next/link";

export function BackLink() {
	return (
		<Link
			href="/"
			style={{
				fontFamily: '"DM Mono", monospace',
				fontSize: "0.6rem",
				color: "var(--text-dim)",
				letterSpacing: "0.1em",
				textTransform: "uppercase",
				transition: "color 0.3s ease",
			}}
			onMouseEnter={(e) =>
				(e.currentTarget.style.color = "var(--text-muted)")
			}
			onMouseLeave={(e) =>
				(e.currentTarget.style.color = "var(--text-dim)")
			}
		>
			← all posts
		</Link>
	);
}
