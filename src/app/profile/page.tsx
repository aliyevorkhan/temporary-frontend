"use client";

import { redirect } from "next/navigation";

const ProfilePage = () => {
  return redirect("/profile/settings");
};

export default ProfilePage;
