import React, { Component } from "react";
import Comp1 from "./Components/personalInfo";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import Nature1 from "./Components/Nature1";
import Home from "./Components/Home";
import Country from "./Components/Country";
import History from "./Components/History";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    flag: 0,
    open: true,
    del: false,
    read: false,
    favorite: false
  };

  handleClick = i => {
    console.log(i);
    if (i == 1) {
      this.setState({ flag: 0 });
    } else if (i == 2) {
      this.setState({ flag: 1 });
    } else if (i == 3) {
      this.setState({ flag: 2 });
    } else if (i == 4) {
      this.setState({ flag: 3 });
    }
  };
  style1 = { backgroundColor: "Black" };
  style2 = { width: 300 };
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  root = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  };
  gridList = {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  };
  titleBar = {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  };
  icon = {
    color: "white"
  };

  images = [
    {
      img: "../images/nature1.jpg",
      path: "/personalInfo",
      title: "personal Info",
      featured: true
    },
    {
      img: "../images/takaMountains.jpg",
      path: "/country/history",
      title: "History",
      featured: true
    },
    {
      img: "../images/nature3.jpg",
      path: "/country/natrue",
      title: "Camera",
      featured: true
    }
  ];

  style3 = { border: "black solid 1px" };

  render() {
    return (
      <div>
        <Router>
          <AppBar position="permanent" style={this.style1}>
            <Toolbar>
              <Link to="/">
                <IconButton>
                  <Typography variant="h6" noWrap style={{ color: "white" }}>
                    Abubaker's Website
                  </Typography>
                </IconButton>
              </Link>

              <Link to="/coutnry">
                <IconButton color="inherit">
                  <img src="../images/sudanButton.jpg" style={{ width: 50 }} />
                </IconButton>
              </Link>
            </Toolbar>
          </AppBar>

          <Switch>
            <Route exact path="/personalInfo">
              <Comp1 />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/country/natrue">
              <Nature1 />
            </Route>
            <Route exact path="/country/history">
              <History />
            </Route>
            <Route exact path="/country">
              <Country />
            </Route>
          </Switch>

          <Grid container spacing={1}>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              {" "}
              <div className={this.root}>
                <GridList
                  cellHeight={650}
                  spacing={1}
                  className={this.gridList}
                >
                  {this.images.map(tile => (
                    <Link to="/personalInfo">
                      <IconButton>
                        <GridListTile key={tile.img} cols={2} rows={2}>
                          <img
                            src={tile.img}
                            alt={tile.title}
                            style={{ width: "65vw" }}
                          />
                          <GridListTileBar
                            title={tile.title}
                            titlePosition="top"
                            actionPosition="left"
                            className={this.images}
                          />
                        </GridListTile>
                      </IconButton>
                    </Link>
                  ))}
                </GridList>
              </div>
            </Grid>
          </Grid>
        </Router>
      </div>
    );
  }
}

export default App;
