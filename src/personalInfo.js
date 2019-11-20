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
          My name is Abubaker, I am 20 years old, and I’ve been living in Qatar
          for the last 20 years. I'm originally from Sudan, but I only go to
          Sudan on Vacations or special occasion. I live with my parents and 3
          brothers, two younger than me and one older. Right now I am an IT
          student at the College of North Atlantic Qatar. this is my third and
          hopefully last year in this college.
        </p>
        <p>
          From the beginning I was pretty excited about programming. this topic
          was always very interesting to me. from the start of my start in CNA-Q
          till now I used at least 5 different programming languages. from those
          languages my favorite is probably python. I found python to be easy to
          deal with and very flexible as well. I haven't worked in any large
          project till now. all the projects that I have done were required from
          me to pass the course.
        </p>
        <p>
          {" "}
          My future plan after graduating from CNA-Q is to go and complete my
          education outside of Qatar. I would love to work as a software
          developer for a huge company like Qatar Airways or Bein Sports. I
          wouldn’t stay there for ever though. I might stay there for like five
          years or ten. After that I would like to start somewhere else other
          than Qatar, to see what the outside world has to offer.
        </p>
      </React.Fragment>
    );
  }
}

export default Comp1;
