"use client";

import { useAuth } from "@/providers/AuthProvider";
import AccountDetailsForm from "./components/AccountDetailsForm";

const SettingsPage = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col w-full">
      <h2 className="font-medium text-2xl mb-7">Şəxsi məlumat</h2>

      {user && <AccountDetailsForm user={user} />}
    </div>
  );
};

export default SettingsPage;
