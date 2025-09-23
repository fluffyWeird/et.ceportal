import React from "react";
import Header from "../components/header";
import Services from "../components/Services";

const Service = () => {
  return(
     <Header />;
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
      />)
};

export default Service;
