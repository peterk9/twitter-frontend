import React from "react";
import Tweet from "../Tweet/Tweet";

import "./Tweetstray.css";

const Tweetstray = props => {
  return (
    <div className="tweetstray-div">
      {props.tweets.map(tweet => {
        return <Tweet key={tweet.user.name} tweet={tweet} />;
      })}
    </div>
  );
};

export default Tweetstray;
