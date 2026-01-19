import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "The Environmental Impact of Switching to Biodegradable Products",
    excerpt: "Learn how small changes in your packaging choices can make a big difference for our planet.",
    date: "Dec 28, 2025",
    category: "Sustainability",
  },
  {
    id: 2,
    title: "How QR Code Verification Ensures Product Authenticity",
    excerpt: "Discover how our unique QR code system helps you verify that you're getting genuine EcoTote products.",
    date: "Dec 20, 2025",
    category: "Technology",
  },
  {
    id: 3,
    title: "5 Ways Businesses Can Reduce Plastic Waste in 2025",
    excerpt: "Practical tips for businesses looking to make their operations more eco-friendly this year.",
    date: "Dec 15, 2025",
    category: "Tips",
  },
];

export function BlogPreview() {
  return (
    <section className="eco-section bg-muted">
      <div className="eco-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="eco-badge mb-4">From Our Blog</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Latest Insights & Updates
            </h2>
          </div>
          <Button variant="outline" asChild className="w-fit">
            <Link to="/blog">
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group eco-card hover:-translate-y-1"
            >
              {/* Category & Date */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              {/* Read More */}
              <Link
                to="/blog"
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Read More
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
