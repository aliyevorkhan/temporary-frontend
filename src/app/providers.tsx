"use client";

import { AuthProvider } from "@/providers/AuthProvider";
import ModalProvider from "@/providers/ModalProvider";
import { QueryClient, QueryClientProvider } from "react-query";

type ProviderProps = {
  children: React.ReactNode;
};

export const queryClient = new QueryClient();

const Providers = ({ children }: ProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <AuthProvider>{children}</AuthProvider>
      </ModalProvider>
    </QueryClientProvider>
  );
};

export default Providers;
