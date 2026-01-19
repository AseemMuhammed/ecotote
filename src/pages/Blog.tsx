import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Clock, User } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const blogPosts = [
  {
    id: 1,
    title: "The Environmental Impact of Switching to Biodegradable Products",
    excerpt: "Learn how small changes in your packaging choices can make a big difference for our planet. We explore the lifecycle of biodegradable products vs. plastic alternatives.",
    date: "Dec 28, 2025",
    readTime: "5 min read",
    author: "Anjali Menon",
    category: "Sustainability",
  },
  {
    id: 2,
    title: "How QR Code Verification Ensures Product Authenticity",
    excerpt: "Discover how our unique QR code system helps you verify that you're getting genuine EcoTote products. A deep dive into our authentication technology.",
    date: "Dec 20, 2025",
    readTime: "4 min read",
    author: "Rahul Kumar",
    category: "Technology",
  },
  {
    id: 3,
    title: "5 Ways Businesses Can Reduce Plastic Waste in 2025",
    excerpt: "Practical tips for businesses looking to make their operations more eco-friendly this year. From packaging to operations, here's how to go green.",
    date: "Dec 15, 2025",
    readTime: "6 min read",
    author: "Priya Nair",
    category: "Tips",
  },
  {
    id: 4,
    title: "Understanding Food-Safe Certifications for Paper Products",
    excerpt: "What makes a paper product safe for food contact? We break down the certifications and standards that matter for your health and safety.",
    date: "Dec 10, 2025",
    readTime: "7 min read",
    author: "Dr. Arun Kumar",
    category: "Education",
  },
  {
    id: 5,
    title: "From Factory to Table: The Journey of an EcoTote Plate",
    excerpt: "Take a behind-the-scenes look at how our biodegradable plates are manufactured, from raw materials to the finished product in your hands.",
    date: "Dec 5, 2025",
    readTime: "8 min read",
    author: "Team EcoTote",
    category: "Behind the Scenes",
  },
  {
    id: 6,
    title: "Event Planning with Sustainable Tableware: A Complete Guide",
    excerpt: "Planning an event? Here's everything you need to know about choosing and using eco-friendly tableware for weddings, parties, and corporate events.",
    date: "Nov 28, 2025",
    readTime: "10 min read",
    author: "Anjali Menon",
    category: "Guides",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-muted py-12 md:py-16">
          <div className="eco-container">
            <div className="max-w-2xl">
              <span className="eco-badge mb-4">Blog</span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Insights & Updates
              </h1>
              <p className="text-muted-foreground">
                Stay informed about sustainability, eco-friendly practices, and the latest 
                from EcoTote. Tips, guides, and stories from our journey.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="eco-section">
          <div className="eco-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="group eco-card hover:-translate-y-1"
                >
                  {/* Category & Meta */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-2 mt-4">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <User className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{post.author}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-muted py-16">
          <div className="eco-container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-muted-foreground mb-6">
                Get the latest sustainability tips, product updates, and exclusive offers 
                delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
