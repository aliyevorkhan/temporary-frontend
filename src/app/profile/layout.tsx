"use client";

import Container from "@/components/container";
import ProfileNavigations from "./components/navigations";
import { PropsWithChildren, useEffect } from "react";
import { useAuth } from "@/providers/AuthProvider";
import { redirect } from "next/navigation";

type Props = PropsWithChildren<{}>;

const ProfilePage = (props: Props) => {
  const { user, isLoading } = useAuth();

  useEffect(() => {
    console.log("user", user);
    console.log("isLoading", isLoading);

    if (!isLoading && !user) {
      redirect("/");
    }
  }, [user, isLoading]);

  if (isLoading) {
    return null;
  }

  if (user) {
    return (
      <Container>
        <div className="pt-10 lg:pt-12 pb-12 lg:pb-14 flex gap-8">
          <div className="w-72">
            <ProfileNavigations />
          </div>

          <div className="px-12 py-10 border border-border-base w-full rounded-md">{props.children}</div>
        </div>
      </Container>
    );
  }

  return null;
};

export default ProfilePage;
