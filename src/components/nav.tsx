import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import { Button } from "@nextui-org/button";

const Nav = () => {
  return (
    <Navbar className="backdrop-blur-xl text-light border-b-1 border-dark-3">
      <NavbarBrand>
        <p className="font-bold text-inherit">MUG-SPACE</p>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-8 text-dark-1"
        justify="center"
      >
        <NavbarItem>Features</NavbarItem>
        <NavbarItem>Customers</NavbarItem>
        <NavbarItem>Integrations</NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Nav;
