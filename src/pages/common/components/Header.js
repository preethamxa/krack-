import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import krackLogo from "../../../img/header/Krack-Learn-Musical-Instruments-online.png";
import React from "react";
import { headerStyles } from "../style/main";
import "../style/Head.css";

export default function Header() {
  const classes = headerStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar className={classes.appbar}>
        <div className={classes.container}>
          <div className={classes.logoContainer}>
            <img src={krackLogo} className={classes.logo} />
          </div>
          <div className={classes.desktopNavbar}>
            <ul className={classes.list}>
              <li className={classes.navItem}>
                <Button className={classes.navItemBtn}>All courses</Button>
              </li>
              <li className={classes.navItem}>
                <Button className={classes.navItemBtn}>Notification</Button>
              </li>
              <li className={classes.navItem}>
                <Button className={classes.navItemBtn}>Tools</Button>
              </li>
              <li className={classes.navItem}>
                <Button className={classes.navItemBtn}>Live</Button>
              </li>
            </ul>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <Button size="small" className={classes.logincta}>
              Log in/Sign up
            </Button>
            <div className={classes.shoppingCartContainer}>
              <ShoppingCartOutlinedIcon style={{ fontSize: "2rem" }} />
            </div>
            <div className={classes.mobileNavbar}>
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MenuRoundedIcon style={{ color: "white", fontSize: "2rem" }} />
              </Button>

              <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClose}>MyAccount</MenuItem>
                <MenuItem onClick={handleClose}>All Courses</MenuItem>
                <MenuItem onClick={handleClose}>Notifications</MenuItem>
                <MenuItem onClick={handleClose}>Live</MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </AppBar>
    </div>
  );
}
