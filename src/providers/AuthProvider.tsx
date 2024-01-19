"use client";

import { User, getUser } from "@/services/user";
import { deleteTokens, getAccessToken, getRefreshToken } from "@/utils/auth";
import { useRouter } from "next/navigation";
import { PropsWithChildren, createContext, useContext, useEffect } from "react";
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
  useQuery,
} from "react-query";

export const AuthContext = createContext<{
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | undefined;
  logout: () => void;
  fetch: <TPageData>(
    options?: RefetchOptions & RefetchQueryFilters<TPageData>
  ) => Promise<QueryObserverResult<User>>;
}>({
  isAuthenticated: false,
  isLoading: false,
  user: undefined,
  logout: () => {},
  fetch: () => Promise.resolve({} as QueryObserverResult<User>),
});

export const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
  const { push } = useRouter();
  const { isLoading, data, refetch, remove } = useQuery("getUser", getUser, {
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    retry: false,
  });

  useEffect(() => {
    const accessToken = getAccessToken();
    const refreshToken = getRefreshToken();

    if (accessToken && refreshToken) {
      refetch();
    }
  }, []);

  const handleLogout = () => {
    remove();
    deleteTokens();

    refetch();

    push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!data,
        isLoading,
        user: data,
        logout: handleLogout,
        fetch: refetch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
