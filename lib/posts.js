import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getAllPosts() {
	const fileNames = fs.readdirSync(postsDirectory);

	const posts = fileNames.map((fileName) => {
		const slug = fileName.replace(/\.mdx$/, "");
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data } = matter(fileContents);

		return {
			slug,
			...data,
		};
	});

	return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostsByCategory(category) {
	return getAllPosts().filter((post) => post.category === category);
}
