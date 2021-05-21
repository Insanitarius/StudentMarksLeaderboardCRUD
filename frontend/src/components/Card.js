import React from "react";
import { Link } from "react-router-dom";

function Card({ title, p1, p2, link }) {
  return (
    <div class="card" style={{ marginTop: "25vh", border: "none" }}>
      <img class="card-img-top" src="" alt="" />

      <div class="card-body">
        <h3 class="card-title my-4">
          <i
            className={
              title === "LeaderBoard"
                ? "fas fa-crown mr-2"
                : "fas fa-user-graduate mr-2"
            }
            style={{ color: "orangered" }}
          ></i>
          {title}
        </h3>
        <p class="card-text ">{p1}</p>
        <p class="card-text">{p2}</p>

        <Link to={link} className="my-4" style={{ textDecoration: "none" }}>
          Click here <i className="fas fa-chevron-right mx-2"></i>
        </Link>
      </div>
    </div>
  );
}

export default Card;
