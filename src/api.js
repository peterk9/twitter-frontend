import openSocket from "socket.io-client";

const socket = openSocket("http://localhost:8000");

const subscribeToTweet = cb => {
  socket.on("tweet", tweet => cb(null, tweet));
};

export default subscribeToTweet;
