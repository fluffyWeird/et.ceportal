// Home.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Message from "../components/Message";
import Stats from "../components/StatusBar";
import NewsCard from "../components/NewsCard";
import Services from "../components/Services";

const Home = () => {
  const [heroSlides, setHeroSlides] = useState([]);
  const [statsData, setStatsData] = useState([]);
  const [authorData, setAuthorData] = useState({});
  const [newsItems, setNewsItems] = useState([]);
  const [servicesItems, setServicesItems] = useState([]);

  const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;

  useEffect(() => {
    if (!BACKEND_URI) return console.error("❌ BACKEND_URI not found");

    const endpoints = {
      heroes: `${BACKEND_URI}/api/heroes?populate=*`,
      stats: `${BACKEND_URI}/api/stats?populate=*`,
      authors: `${BACKEND_URI}/api/authors?populate=*`,
      news: `${BACKEND_URI}/api/newss?populate=*`,
      services: `${BACKEND_URI}/api/services?populate=*`,
    };

    axios
      .all(Object.values(endpoints).map((url) => axios.get(url)))
      .then(
        axios.spread(
          (heroesRes, statsRes, authorsRes, newsRes, servicesRes) => {
            // HEROES
            setHeroSlides(
              heroesRes.data.data.map((item) => ({
                title: item.title || "No Title",
                subtitle: item.sutitle || "",
                buttonText: item.buttonText || "Learn More",
                image: item.image?.url
                  ? BACKEND_URI + item.image.url
                  : "/placeholder.jpg",
              }))
            );

            // STATS
            setStatsData(
              statsRes.data.data.map((stat) => ({
                key: stat.key || "No Key",
                value: stat.value || 0,
              }))
            );

            // AUTHOR

            setAuthorData(
              authorsRes.data.data.map((i) => ({
                authorImage: i.avatar.url || "/placeholder.jpg",

                authorMessage: i.message || "",
                authorName: i.name || "",
                authorTitle: i.tittle || "",
                authorDivision: "hi",
                fullMessage: i.fullMessage || "",
              }))
            );

            // NEWS
            setNewsItems(
              newsRes.data.data.map((item) => ({
                image: item.image.url || "/placeholder.jpg",
                title: item.title || "No Title",
                summary: item.summary || "",
                date: item.date || "",
              }))
            );

            // SERVICES
            setServicesItems(
              servicesRes.data.data.map((item) => ({
                image: item.image.url || "/placeholder.jpg",
                title: item.title || "No Title",
                summary: item.summary || "",
                date: item.date || "",
              }))
            );
          }
        )
      )
      .catch((err) => console.error("Error fetching Strapi data:", err));
  }, [BACKEND_URI]);

  return (
    <div>
      <Header />
      <Hero slides={heroSlides} />
      <Stats stats={statsData} />
      <Message authors={authorData} />

      <Services servicesItems={servicesItems} />
      <NewsCard newsItems={newsItems} />
      <Footer />
    </div>
  );
};

export default Home;
