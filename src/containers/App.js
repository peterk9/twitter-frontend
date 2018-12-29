import React, { Component } from "react";
import Tweetstray from "../components/Tweetstray/Tweetstray";
import Tweetscount from "../components/Tweetcount/Tweetcount";
import test_tweets from "./test-data";

import subscribeToTweet from "../api";

import "./App.css";

let live_tweets = [];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { tweets: live_tweets };
  }

  componentDidMount() {
    subscribeToTweet((err, tweet) => {
      tweet = JSON.parse(tweet);
      let tweetsCopy = [...this.state.tweets];
      tweetsCopy.push(tweet);
      console.log(`tweets copy! ${JSON.stringify(tweetsCopy)}`);
      if (tweetsCopy != null) {
        this.setState({
          tweets: tweetsCopy
        });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Tweetscount tweets={this.state.tweets} />
        <Tweetstray tweets={this.state.tweets} />
      </div>
    );
  }
}

export default App;
