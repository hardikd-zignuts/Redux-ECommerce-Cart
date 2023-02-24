import React from "react";
import logo from "../logo.svg";
import { Navbar, Button, Badge, NavbarBrand } from "reactstrap";

function NavBar() {
  return (
    <>
      <div>
        <Navbar color="dark" dark>
          <NavbarBrand href="/">
            <img
              alt="logo"
              src={logo}
              style={{
                height: 40,
                width: 40,
              }}
            />
            React Redux
          </NavbarBrand>
          <Button disabled color="light" outline>
            My cart{" "}
            <Badge color="danger" fill="true">
              12
            </Badge>
          </Button>
        </Navbar>
      </div>
    </>
  );
}

export default NavBar;
