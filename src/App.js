import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import FullPower from "./Pages/FullPower/FullPower";
import AboutFullPower from "./Pages/FullPower/About";
import TigerSpeed from "./Pages/TigerSpeed/TigerSpeed";
import AboutTigerSpeed from "./Pages/TigerSpeed/About";
import SkyPoint from "./Pages/SkyPoint/SkyPoint";
import AboutSkyPoint from "./Pages/SkyPoint/About";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/FullPower" component={FullPower}/>
          <Route exact path="/FullPower/About" component={AboutFullPower}/>
          <Route exact path="/TigerSpeed" component={TigerSpeed}/>
          <Route exact path="/TigerSpeed/About" component={AboutTigerSpeed}/>
          <Route exact path="/SkyPoint" component={SkyPoint}/>
          <Route exact path="/SkyPoint/About" component={AboutSkyPoint}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
