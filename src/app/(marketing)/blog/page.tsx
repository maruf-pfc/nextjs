import { getPosts } from "@/lib/marketing/blog/posts";
import { Post } from "@/ui/marketing/blog/post";

export const metadata = {
  title: "Blog | Our Latest Posts",
  description:
    "Read our latest blog posts and stay updated with the newest trends and insights.",
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Blog
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Stay updated with our latest news, insights, and stories
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </ul>
      </div>
    </div>
  );
}
