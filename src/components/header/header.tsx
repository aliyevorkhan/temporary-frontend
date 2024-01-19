"use client";

import Image from "next/image";
import Container from "../container";
import Link from "next/link";
import AuthMenu from "./authmenu";
import SearchInput from "../search-input";
import { useState } from "react";
import Modal from "../modal";
import LoginForm from "../auth/login-form";
import RegisterForm from "../auth/register-form";

const Header = () => {
  const [showAuthMenu, setAuthMenu] = useState(false);
  const [formType, setFormType] = useState<"login" | "register">("login");

  return (
    <header className="bg-brand py-4">
      <Container>
        <div className="flex items-center justify-between flex-wrap lg:flex-nowrap">
          <div className="h-[80px] w-[80px] relative lg:order-none">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Logo"
                className="object-contain"
                fill
              />
            </Link>
          </div>

          <div className="order-3 lg:order-none w-full lg:w-max">
            <SearchInput />
          </div>
          <div className="order-2 lg:order-none">
            <AuthMenu onClick={() => setAuthMenu(true)} />
          </div>
        </div>
      </Container>
      <Modal isOpen={showAuthMenu} onClose={() => setAuthMenu(false)}>
        <div className="w-full lg:w-[920px] xl:w-[1000px] 2xl:w-[1200px]">
          {formType === "login" ? (
            <LoginForm
              onRegisterClick={() => setFormType("register")}
              onLoginSuccess={() => setAuthMenu(false)}
            />
          ) : (
            <RegisterForm
              onLoginClick={() => setFormType("login")}
              onRegisterSuccess={() => setAuthMenu(false)}
            />
          )}
        </div>
      </Modal>
    </header>
  );
};

export default Header;
