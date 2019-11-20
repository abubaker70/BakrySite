import React, { Component } from "react";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

class Comp1 extends Component {
  state = { flag: false };
  style1 = { marginRight: 100 };
  style2 = { marginRight: 15 };
  style3 = { width: 1000, backgroundColor: "lightGrey", color: "black" };
  style4 = { width: 1000, backgroundColor: "white", color: "black" };
  style5 = { marginTop: 20 };
  style6 = { marginTop: 20 };
  render() {
    return (
      <React.Fragment>
        <p>
          My name is Abubaker Nasir, I’m an 18 year old Sudanese guy. Who has
          lived his whole life in Qatar. I only go to Sudan on Vacations or
          special occasion. I live with my parents and 3 brothers, two younger
          than me and one older.
        </p>
        <p>
          I registered for CNA-Q and got accepted for the winter semester of
          2016. Non of my family members had ever studied here before, so it was
          a new experience for me.{" "}
        </p>
      </React.Fragment>
    );
  }
}

export default Comp1;
