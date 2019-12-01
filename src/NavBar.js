import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.displayNavbar = this.displayNavbar.bind(this);
  }

  toggleDrawer = () => this.setState({ open: !this.state.open });

  authenticatedNavbar = () => {
    return (
      <div>
        <AppBar
          iconElementRight={
            <MenuItem
              containerElement={<Link to={"login"} />}
              onTouchTap={() => {
                this.props.onLogoutClick();
              }}
              primaryText="Logout"
            />
          }
          onLeftIconButtonTouchTap={() => this.toggleDrawer()}
          title="Your_app"
        />
        <Drawer
          docked={false}
          onRequestChange={open => this.setState({ open })}
          open={this.state.open}
        >
          <MenuItem
            containerElement={<Link to={"home"} />}
            onTouchTap={() => {
              this.toggleDrawer();
            }}
            primaryText="Home"
          />
          <MenuItem
            containerElement={<Link to={"some_component"} />}
            onTouchTap={() => {
              this.toggleDrawer();
            }}
            primaryText="Some Component"
          />
        </Drawer>
      </div>
    );
  };

  unauthenticatedNavbar = () => {
    return (
      <div>
        <AppBar
          iconElementRight={
            <MenuItem
              containerElement={<Link to={"login"} />}
              primaryText="Login"
            />
          }
          showMenuIconButton={false}
          title="Your_app"
        />
      </div>
    );
  };
}
