import React from "react";

import Card from "./Card";

function Home() {
  return (
    <div className="container">
      <div className="row justify-content-center text-justify">
        <div className="col-6">
          <Card
            title="Enter Marks"
            p1=" Upload Marks of each student ."
            p2="Roll Number of each student should be unique ."
            link="/entermarks"
          />
        </div>
        <div className="col-6">
          <Card
            title="LeaderBoard"
            p1=" Display's the rankings of the students ."
            p2="Provide Sorting and Searching functionality ."
            link="/leaderboard"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
