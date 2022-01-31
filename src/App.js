import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API;
  // apikey = "e0d7156b20d644cf8bc736ca145d463f";
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };
  render() {
    return (
      // business
      // entertainment
      // general
      // health
      // science
      // sports
      // technology

      <div>
        <Router>
          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}
          />
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="general"
                pageSize={5}
                category="general"
                country="in"
              />
            </Route>
            <Route exact path="/business">
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                pageSize={5}
                key="business"
                category="business"
                country="in"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="entertainment"
                pageSize={5}
                category="entertainment"
                country="in"
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="health"
                pageSize={5}
                category="health"
                country="in"
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="science"
                pageSize={5}
                category="science"
                country="in"
              />
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                pageSize={5}
                key="sports"
                category="sports"
                country="in"
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                pageSize={5}
                key="technology"
                category="general"
                country="in"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
