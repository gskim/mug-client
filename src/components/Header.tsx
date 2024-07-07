import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Input } from "@nextui-org/input";
import { MailIcon } from "@/icons/MailIcon";
import { LockIcon } from "@/icons/LockIcon";
import Link from "next/link";
import { Checkbox } from "@nextui-org/checkbox";
import { emailCheck } from "@/hooks/regex";

const Header = () => {
  return (
    <Navbar
      className="backdrop-blur-xl text-light justify-between h-[56px] border-b-1 border-dark-3 sticky top-0 z-10"
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
          <LoginModal />
        </NavbarItem>
        <NavbarItem>
          <Button
            color="primary"
            variant="faded"
            size="sm"
            className="text-orange"
          >
            가입하기
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;

const LoginModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(true);

  return (
    <>
      <Button variant="faded" size="sm" className="text-dark" onClick={onOpen}>
        로그인
      </Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        classNames={{
          backdrop: "bg-[#121212]/40",
          closeButton: "opacity-0",
        }}
      >
        <ModalContent className="bg-dark border-1 border-dark-3">
          {(onClose) => (
            <>
              <ModalHeader className="w-full flex justify-center">
                MUG-SPACE
              </ModalHeader>
              <ModalBody>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                  onFocus={() => setIsEmail(true)}
                  onBlur={() => setIsEmail(false)}
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="이메일"
                  errorMessage="이메일 형식이 맞는지 확인해주세요"
                  isInvalid={!isEmail && email ? !emailCheck(email) : false}
                  variant="bordered"
                  classNames={{
                    label: "!text-dark-2 mb-1",
                    inputWrapper: "border-1",
                  }}
                />
                <Input
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="비밀번호"
                  type="password"
                  variant="bordered"
                  classNames={{
                    label: "!text-dark-2 mb-1",
                    inputWrapper: "border-1",
                  }}
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    color="primary"
                    classNames={{
                      label: "text-[14px] text-dark-2 font-thin",
                    }}
                  >
                    아이디 기억하기
                  </Checkbox>
                  <Link className="text-dark-2 text-sm" href="#">
                    비밀번호 찾기
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="text-white w-full bg-primary-700"
                  onPress={onClose}
                >
                  로그인
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
