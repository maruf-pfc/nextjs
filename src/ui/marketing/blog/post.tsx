// ui/post.tsx
import React from "react";
import Link from "next/link"; // Import Next.js Link component

interface PostProps {
  post: {
    id: number;
    title: string;
    content: string;
    slug: string; // Add slug to each post for dynamic routing
  };
}

export const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <li className="bg-white shadow-xl rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300 ease-in-out">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
        <p className="text-gray-600 text-base mb-4">
          {post.content.slice(0, 100)}...
        </p>
        <div className="flex justify-end">
          {/* Link to the dynamic post page */}
          <Link href={`/blog/${post.slug}`} passHref>
            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </li>
  );
};
