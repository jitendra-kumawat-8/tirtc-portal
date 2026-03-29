import React, { createContext, useContext, useState } from "react";
import { useRouter } from "next/router";

type NavState = {
  activeRoute: string;
  collapsed: boolean;
  toggleCollapse: () => void;
  setActiveRoute: (route: string) => void;
};

const NavCtx = createContext<NavState | null>(null);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { pathname } = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [activeRoute, setActiveRouteState] = useState(pathname);

  const value: NavState = {
    activeRoute,
    collapsed,
    toggleCollapse: () => setCollapsed((c) => !c),
    setActiveRoute: (route: string) => setActiveRouteState(route),
  };

  return <NavCtx.Provider value={value}>{children}</NavCtx.Provider>;
};

export const useNav = () => {
  const ctx = useContext(NavCtx);
  if (!ctx) throw new Error("useNav must be used inside <NavigationProvider>");
  return ctx;
};
