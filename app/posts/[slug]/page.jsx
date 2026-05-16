import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts } from "@/lib/posts";
import { Shell } from "@/components/Shell";
import { CategoryBadge } from "@/components/CategoryBadge";
import { SectionHeading } from "@/components/SectionHeading";
import { BackLink } from "@/components/BackLink";
import { ReadingProgress } from "@/components/ReadingProgress";

export async function generateStaticParams() {
	const posts = getAllPosts();
	return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const fullPath = path.join(process.cwd(), "content/posts", `${slug}.mdx`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data } = matter(fileContents);

	return {
		title: `${data.title} — avi jain`,
		description: data.summary,
		openGraph: {
			title: data.title,
			description: data.summary,
			type: "article",
			publishedTime: data.date,
		},
		twitter: {
			card: "summary",
			title: data.title,
			description: data.summary,
		},
	};
}

const CATEGORY_META = {
	build: { color: "#C9904A" },
	market: { color: "#8FAF7A" },
	essay: { color: "#C47A5A" },
	notes: { color: "#A090C0" },
};

function formatDate(iso) {
	return new Date(iso).toLocaleDateString("en-GB", {
		day: "2-digit",
		month: "short",
		year: "numeric",
	});
}

export default async function PostPage({ params }) {
	const { slug } = await params;
	const fullPath = path.join(process.cwd(), "content/posts", `${slug}.mdx`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);
	const meta = CATEGORY_META[data.category?.toLowerCase()] || {
		color: "#C9904A",
	};

	const mdxComponents = {
		h1: ({ children }) => (
			<SectionHeading color={meta.color}>{children}</SectionHeading>
		),
		h2: ({ children }) => (
			<SectionHeading color={meta.color}>{children}</SectionHeading>
		),
		h3: ({ children }) => (
			<SectionHeading color={meta.color}>{children}</SectionHeading>
		),
		p: ({ children }) => (
			<p
				style={{
					fontFamily: '"EB Garamond", Georgia, serif',
					fontSize: "1.05rem",
					lineHeight: 1.85,
					color: "var(--text)",
					marginBottom: "1.5rem",
					fontWeight: 400,
				}}
			>
				{children}
			</p>
		),
		strong: ({ children }) => (
			<strong style={{ fontWeight: 700 }}>{children}</strong>
		),
		a: ({ href, children }) => (
			<a
				href={href}
				style={{
					color: "var(--glow)",
					opacity: 0.8,
					textDecoration: "underline",
				}}
			>
				{children}
			</a>
		),
		code: ({ children }) => (
			<code
				style={{
					fontFamily: '"DM Mono", monospace',
					fontSize: "0.85em",
					background: "rgba(255,255,255,0.05)",
					padding: "0.1em 0.4em",
					borderRadius: "3px",
				}}
			>
				{children}
			</code>
		),
		pre: ({ children }) => (
			<pre
				style={{
					background: "rgba(0,0,0,0.3)",
					padding: "1.5rem",
					borderRadius: "4px",
					overflowX: "auto",
					marginBottom: "1.5rem",
				}}
			>
				{children}
			</pre>
		),
	};

	return (
		<Shell>
			<ReadingProgress color={meta.color} />
			<main
				style={{
					position: "relative",
					zIndex: 10,
					maxWidth: "620px",
					margin: "0 auto",
					padding: "0 2rem",
				}}
			>
				<header
					style={{
						paddingTop: "clamp(4.5rem, 8vw, 6.5rem)",
						paddingBottom: "2.5rem",
					}}
				>
					<div style={{ marginBottom: "1.25rem" }}>
						<CategoryBadge category={data.category} size="md" />
					</div>

					<h1
						style={{
							fontFamily: '"Playfair Display", Georgia, serif',
							fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
							fontWeight: 400,
							lineHeight: 1.2,
							letterSpacing: "-0.03em",
							color: "var(--text)",
							margin: "0 0 1.5rem 0",
							textShadow: `0 0 60px ${meta.color}25`,
						}}
					>
						{data.title}
					</h1>

					<div
						style={{
							display: "flex",
							flexWrap: "wrap",
							gap: "0 1.5rem",
							fontFamily: '"DM Mono", monospace',
							fontSize: "0.6rem",
							color: "var(--text-dim)",
							letterSpacing: "0.08em",
							marginBottom: "1rem",
						}}
					>
						<span>{formatDate(data.date)}</span>
						<span>·</span>
						<span>{data.readTime}</span>
						<span>·</span>
						<span>Avi Jain</span>
					</div>

					<div
						style={{
							display: "flex",
							flexWrap: "wrap",
							gap: "0.75rem",
						}}
					>
						{data.tags?.map((tag) => (
							<span
								key={tag}
								style={{
									fontFamily: '"DM Mono", monospace',
									fontSize: "0.56rem",
									color: "var(--text-faint)",
									letterSpacing: "0.08em",
									textTransform: "lowercase",
								}}
							>
								{tag}
							</span>
						))}
					</div>
				</header>

				<div
					style={{
						height: "1px",
						background: `linear-gradient(to right, ${meta.color}40, var(--border) 40%, transparent)`,
						marginBottom: "2.5rem",
					}}
				/>

				<article style={{ paddingBottom: "2rem" }}>
					<MDXRemote source={content} components={mdxComponents} />
				</article>

				{/* End decoration */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "1rem",
						margin: "3rem 0 6rem",
					}}
				>
					<span
						style={{
							fontFamily: '"DM Mono", monospace',
							fontSize: "0.7rem",
							color: `${meta.color}60`,
						}}
					>
						◆
					</span>
					<div
						style={{
							flex: 1,
							height: "1px",
							background: `linear-gradient(to right, ${meta.color}30, transparent)`,
						}}
					/>
					<BackLink />
				</div>
			</main>
		</Shell>
	);
}
