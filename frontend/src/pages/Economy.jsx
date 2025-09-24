import React from "react";
const [statsData, setStatsData] = useState([]);
const Economy = () => {
  return (
    <div>
      {" "}
      <div>
        <Header />

        <Stats stats={statsData} />

        <Footer />
      </div>
    </div>
  );
};

export default Economy;
