import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Message from "../components/Message";
import Stats from "../components/StatusBar";
import NewsCard from "../components/NewsCard";
import Services from "../components/Services";
const Home = () => {
  return (
    <div className="">
      <Header />
      <Hero
        slides={[
          {
            image: "https://picsum.photos/1200/600?random=1",
            title: "Discover Amazing Stories",
            subtitle: "A calm place for ideas and creativity",
            buttonText: "Read Blogs",
          },
          {
            image: "https://picsum.photos/1200/600?random=2",
            title: "Share Your Thoughts",
            subtitle: "Write and inspire others with your words",
            buttonText: "Start Writing",
          },
          {
            image: "https://picsum.photos/1200/600?random=3",
            title: "Join Our Community",
            subtitle: "Connect with readers and writers worldwide",
            buttonText: "Get Started",
          },
          {
            image: "https://picsum.photos/1200/600?random=3",
            title: "Join Our Community",
            subtitle: "Connect with readers and writers worldwide",
            buttonText: "Get Started",
          },
          {
            image: "https://picsum.photos/1200/600?random=3",
            title: "Join Our Community",
            subtitle: "Connect with readers and writers worldwide",
            buttonText: "Get Started",
          },
          {
            image: "https://picsum.photos/1200/600?random=3",
            title: "Join Our Community",
            subtitle: "Connect with readers and writers worldwide",
            buttonText: "Get Started",
          },
          {
            image: "https://picsum.photos/1200/600?random=3",
            title: "Join Our Community",
            subtitle: "Connect with readers and writers worldwide",
            buttonText: "Get Started",
          },
        ]}
      />
      <Stats
        stats={[
          { key: "Users", value: 1200 },
          { key: "Blogs Published", value: 350 },
          { key: "Active Authors", value: 85 },
          { key: "Countries", value: 15 },
        ]}
      />

      <Message
        authorImage="https://randomuser.me/api/portraits/women/44.jpg"
        authorMessage="Writing is the painting of the voice."
        authorName="Jane Smith"
        authorTitle="Editor-in-Chief"
        authorDivision="Publishing Division"
        fullMessage="At MyBlogCMS, we believe in empowering voices and sharing stories that matter. Writing allows us to connect across cultures and generations, bridging gaps and inspiring change..."
      />

      <Services
        newsItems={[
          {
            image: "https://picsum.photos/200/150?random=1",
            title: "New CMS Features Released",
            summary: "Explore the latest updates to our blogging platform.",
            date: "Sep 22, 2025",
          },
          {
            image: "https://picsum.photos/200/150?random=2",
            title: "Community Spotlight",
            summary: "Highlighting top stories from our creative authors.",
            date: "Sep 20, 2025",
          },
          {
            image: "https://picsum.photos/200/150?random=3",
            title: "Tips for Writers",
            summary: "How to keep readers engaged with your blog content.",
            date: "Sep 18, 2025",
          },
          {
            image: "https://picsum.photos/200/150?random=4",
            title: "CMS Best Practices",
            summary: "Learn how to manage your content effectively.",
            date: "Sep 16, 2025",
          },
          {
            image: "https://picsum.photos/200/150?random=5",
            title: "Writing Tips & Tricks",
            summary: "Improve your storytelling skills easily.",
            date: "Sep 14, 2025",
          },
        ]}
      />

      <NewsCard
        newsItems={[
          {
            image: "https://picsum.photos/200/150?random=1",
            title: "New CMS Features Released",
            summary: "Explore the latest updates to our blogging platform.",
            date: "Sep 22, 2025",
          },
          {
            image: "https://picsum.photos/200/150?random=2",
            title: "Community Spotlight",
            summary: "Highlighting top stories from our creative authors.",
            date: "Sep 20, 2025",
          },
          {
            image: "https://picsum.photos/200/150?random=3",
            title: "Tips for Writers",
            summary: "How to keep readers engaged with your blog content.",
            date: "Sep 18, 2025",
          },
          {
            image: "https://picsum.photos/200/150?random=4",
            title: "CMS Best Practices",
            summary: "Learn how to manage your content effectively.",
            date: "Sep 16, 2025",
          },
          {
            image: "https://picsum.photos/200/150?random=5",
            title: "Writing Tips & Tricks",
            summary: "Improve your storytelling skills easily.",
            date: "Sep 14, 2025",
          },
        ]}
      />

      <Footer />
    </div>
  );
};

export default Home;
