import { getPostsByCategory } from "@/lib/posts";
import { Shell } from "@/components/Shell";
import PostCard from "@/components/PostCard";
import { CategoryBadge } from "@/components/CategoryBadge";

const META = {
	color: "#C9904A",
	label: "Build Logs",
	desc: "Hardware projects, dev setups, and things I made with my hands.",
};

export default function BuildPage() {
	const posts = getPostsByCategory("build");
	return (
		<Shell>
			<main
				style={{
					position: "relative",
					zIndex: 10,
					maxWidth: "660px",
					margin: "0 auto",
					padding: "0 2rem",
				}}
			>
				<section
					style={{
						paddingTop: "clamp(4.5rem, 8vw, 6.5rem)",
						paddingBottom: "2.5rem",
					}}
				>
					<div style={{ marginBottom: "1rem" }}>
						<CategoryBadge category="build" size="md" />
					</div>
					<h1
						style={{
							fontFamily: '"Playfair Display", Georgia, serif',
							fontSize: "clamp(1.8rem, 5vw, 2.6rem)",
							fontWeight: 400,
							letterSpacing: "-0.03em",
							lineHeight: 1.2,
							color: "var(--text)",
							margin: "0 0 0.75rem 0",
							textShadow: `0 0 60px ${META.color}20`,
						}}
					>
						{META.label}
					</h1>
					<p
						style={{
							fontFamily: '"EB Garamond", Georgia, serif',
							fontSize: "0.95rem",
							fontStyle: "italic",
							color: "var(--text-muted)",
							lineHeight: 1.7,
							margin: 0,
						}}
					>
						{META.desc}
					</p>
				</section>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "1rem",
					}}
				>
					<div
						style={{
							flex: 1,
							height: "1px",
							background: `linear-gradient(to right, ${META.color}50, var(--border))`,
						}}
					/>
					<span
						style={{
							fontFamily: '"DM Mono", monospace',
							fontSize: "0.55rem",
							color: "var(--text-dim)",
							letterSpacing: "0.1em",
							whiteSpace: "nowrap",
						}}
					>
						{posts.length}{" "}
						{posts.length === 1 ? "entry" : "entries"}
					</span>
					<div
						style={{
							flex: 1,
							height: "1px",
							background:
								"linear-gradient(to left, transparent, var(--border))",
						}}
					/>
				</div>
				<section style={{ marginBottom: "6rem", marginTop: "0.25rem" }}>
					{posts.map((post, i) => (
						<PostCard
							key={post.slug}
							{...post}
							showDivider={i > 0}
						/>
					))}
				</section>
			</main>
		</Shell>
	);
}
