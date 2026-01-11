import React from "react";
import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div className="card">
      <div>
        <div className="top">
          <img src={props.image} alt={props.name} />
          <button>
            <Bookmark size={12} />
            Save
          </button>
        </div>

        <div className="center">
          <h3>
            {props.name} <span>{props.daysAgo} Days ago</span>
          </h3>
          <h2>{props.position}</h2>

          <div className="tag">
            <h4>{props.tags[0]}</h4>
            <h4>{props.tags[1]}</h4>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>{props.pay}</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
