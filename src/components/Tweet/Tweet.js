import React from "react";
import "./Tweet.css";

const Tweet = props => {
  return (
    <div className="tweet-div">
      <img
        className="tweet-img"
        alt={props.tweet.user.name}
        src={props.tweet.user.profile_image_url}
      />
      <p className="tweet-username">{props.tweet.user.name}</p>
      <p>{props.tweet.user.description}</p>
      <p>{props.tweet.created_at}</p>
      <p>{props.tweet.text}</p>
      {props.tweet.source}
    </div>
  );
};

export default Tweet;
