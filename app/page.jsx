import { getAllPosts } from "@/lib/posts";
import { Shell } from "@/components/Shell";
import PostCard from "@/components/PostCard";

const ORGANIC_TAGS = [
	{ word: "circuits", opacity: 0.55, size: "0.72rem" },
	{ word: "markets", opacity: 0.4, size: "0.62rem" },
	{ word: "notebooks", opacity: 0.65, size: "0.8rem" },
	{ word: "hardware", opacity: 0.5, size: "0.68rem" },
	{ word: "soldering", opacity: 0.35, size: "0.58rem" },
	{ word: "reads", opacity: 0.45, size: "0.65rem" },
	{ word: "thinking", opacity: 0.6, size: "0.75rem" },
	{ word: "fragments", opacity: 0.3, size: "0.55rem" },
	{ word: "dispatches", opacity: 0.5, size: "0.67rem" },
	{ word: "essays", opacity: 0.55, size: "0.7rem" },
];

const CATEGORY_KEY = [
	{ abbr: "BUILD", color: "#C9904A" },
	{ abbr: "MARKET", color: "#8FAF7A" },
	{ abbr: "ESSAY", color: "#C47A5A" },
	{ abbr: "NOTES", color: "#A090C0" },
];

export default function Home() {
	const posts = getAllPosts();

	return (
		<Shell postCount={posts.length}>
			<main
				style={{
					position: "relative",
					zIndex: 10,
					maxWidth: "660px",
					margin: "0 auto",
					padding: "0 2rem",
				}}
			>
				{/* Masthead */}
				<section
					style={{
						paddingTop: "clamp(5rem, 10vw, 7rem)",
						paddingBottom: "3rem",
						textAlign: "center",
					}}
				>
					<p
						style={{
							fontFamily: '"DM Mono", monospace',
							fontSize: "0.6rem",
							color: "var(--text-dim)",
							letterSpacing: "0.18em",
							textTransform: "uppercase",
							marginBottom: "1.25rem",
						}}
					>
						· a blog by avi jain ·
					</p>

					<h1
						style={{
							fontFamily: '"Playfair Display", Georgia, serif',
							fontSize: "clamp(2rem, 6vw, 3.2rem)",
							fontWeight: 400,
							lineHeight: 1.2,
							letterSpacing: "-0.03em",
							color: "var(--text)",
							margin: "0 0 0.5rem 0",
							textShadow: "0 0 80px rgba(203,170,106,0.2)",
						}}
					>
						Notes from the
						<br />
						<em
							style={{
								fontStyle: "italic",
								color: "var(--glow)",
								opacity: 0.85,
								textShadow: "0 0 40px rgba(203,170,106,0.35)",
							}}
						>
							workbench
						</em>
						{" & "}
						<em
							style={{
								fontStyle: "italic",
								color: "rgba(243,239,193,0.7)",
							}}
						>
							margin
						</em>
					</h1>

					<p
						style={{
							fontFamily: '"EB Garamond", Georgia, serif',
							fontSize: "1rem",
							color: "var(--text-muted)",
							fontStyle: "italic",
							lineHeight: 1.6,
							maxWidth: "420px",
							margin: "1rem auto 0",
						}}
					>
						ECE @ Shiv Nadar University — building, reading, and
						writing about what I find interesting.
					</p>

					{/* Tag cloud */}
					<div
						style={{
							display: "flex",
							flexWrap: "wrap",
							gap: "0.6rem 1.1rem",
							justifyContent: "center",
							maxWidth: "380px",
							margin: "2rem auto 0",
						}}
					>
						{ORGANIC_TAGS.map(({ word, opacity, size }) => (
							<span
								key={word}
								style={{
									fontFamily: '"DM Mono", monospace',
									fontSize: size,
									letterSpacing: "0.08em",
									color: `rgba(203,170,106,${opacity})`,
									textTransform: "lowercase",
								}}
							>
								{word}
							</span>
						))}
					</div>

					{/* Category key */}
					<div
						style={{
							display: "flex",
							flexWrap: "wrap",
							gap: "0 2rem",
							justifyContent: "center",
							marginTop: "2.5rem",
						}}
					>
						{CATEGORY_KEY.map(({ abbr, color }) => (
							<span
								key={abbr}
								style={{
									fontFamily: '"DM Mono", monospace',
									fontSize: "0.58rem",
									letterSpacing: "0.1em",
									color,
									opacity: 0.75,
									textTransform: "uppercase",
								}}
							>
								{abbr}
							</span>
						))}
					</div>
				</section>

				{/* Divider */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "1rem",
						margin: "0",
					}}
				>
					<div
						style={{
							flex: 1,
							height: "1px",
							background:
								"linear-gradient(to right, transparent, var(--border))",
						}}
					/>
					<span
						style={{
							fontFamily: '"DM Mono", monospace',
							fontSize: "0.55rem",
							color: "var(--text-dim)",
							letterSpacing: "0.12em",
							whiteSpace: "nowrap",
						}}
					>
						{posts.length} entries
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

				{/* Posts */}
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
