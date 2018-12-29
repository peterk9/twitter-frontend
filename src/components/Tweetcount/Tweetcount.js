import React from "react";

const TwitterCount = props => {
  return (
    <div>
      <h2> Total Tweets {props.tweets.length} </h2>
    </div>
  );
};

export default TwitterCount;
