import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import NightSky from "./components/NightSky";
import GlassAppBar from "./components/AppBar";
import MoviePlayer from "./components/MoviesPlayer";
import "./index.css";
import 'video-react/dist/video-react.css';

const App = () => {
  return (
    <Router>
      <>
        <NightSky />
        <GlassAppBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies/:path/:title/:rates" component={MoviePlayer} />
        </Switch>
      </>
    </Router>
  );
};

export default App;
