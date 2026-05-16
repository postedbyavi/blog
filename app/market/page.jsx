import { getPostsByCategory } from "@/lib/posts";
import { Shell } from "@/components/Shell";
import PostCard from "@/components/PostCard";
import { CategoryBadge } from "@/components/CategoryBadge";

const META = {
	color: "#8FAF7A", // change per category: market=#8FAF7A, essay=#C47A5A, notes=#A090C0
	desc: "Notes on semiconductors, technology markets, and industrial change.",
};

export default function MarketPage() {
	const posts = getPostsByCategory("market");
	return (
		<Shell>
			<main
				style={{
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
						<CategoryBadge category="market" size="md" />
					</div>
					<h1
						style={{
							fontFamily: "var(--font-display)",
							fontSize: "clamp(1.8rem, 5vw, 2.6rem)",
							fontWeight: 400,
							letterSpacing: "-0.03em",
							color: "var(--text)",
							margin: "0 0 0.75rem 0",
							textShadow: `0 0 60px ${META.color}20`,
						}}
					>
						Market Dispatches
					</h1>
					<p
						style={{
							fontFamily: "var(--font-serif)",
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
							fontFamily: "var(--font-mono)",
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
					{posts.map((post) => (
						<PostCard key={post.slug} {...post} />
					))}
				</section>
			</main>
		</Shell>
	);
}
