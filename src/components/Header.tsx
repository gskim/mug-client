import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";

const Nav = () => {
  return (
    <Navbar
      className="backdrop-blur-xl text-light justify-between h-[56px] border-b-1 border-dark-3"
      classNames={{
        wrapper: `p-0 m-auto max-w-[1050px]`,
      }}
    >
      <NavbarBrand>
        <p className="font-bold text-inherit">MUG-SPACE</p>
      </NavbarBrand>
      <NavbarContent
        className="flex gap-[100px] text-dark-1 cursor-pointer"
        justify="center"
      >
        <NavbarItem>제품</NavbarItem>
        <NavbarItem>기능</NavbarItem>
        <NavbarItem>가격</NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="gap-2">
        <NavbarItem className="hidden lg:flex">
          <Button variant="faded" size="sm" className="text-dark">
            로그인
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            color="primary"
            variant="faded"
            size="sm"
            className="text-yellow"
          >
            가입하기
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Nav;
