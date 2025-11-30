"use client";

import Link from "next/link";
import { getLatestBlogPosts } from "@/lib/data";
import { SectionTitle } from "../section-title";
import { formatDate } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function LatestBlog() {
  const posts = getLatestBlogPosts(3);

  return (
    <section className="spad">
      <div className="container mx-auto">
        <SectionTitle
          subtitle="Our Blog"
          title="Latest News & Updates"
          description="Stay informed about the automotive industry and car buying tips"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <div className="bg-white dark:bg-dark-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src={post.featured_image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span>By {post.author}</span>
                    <span>{formatDate(post.published_at)}</span>
                  </div>
                  <h5 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
