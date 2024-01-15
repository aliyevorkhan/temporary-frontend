"use client";

import { QueryClient, QueryClientProvider } from "react-query";

type ProviderProps = {
  children: React.ReactNode;
};

export const queryClient = new QueryClient();

const Providers = ({ children }: ProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Providers;
