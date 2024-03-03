'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from "react";

const ClientLoadCtx = createContext(false);

export const IsClientCtxProvider = ({ children }:{children: ReactNode}) => {
  const [clientLoad, setClientLoad] = useState(false);
  useEffect(() => setClientLoad(true), []);
  return (
    <ClientLoadCtx.Provider value={clientLoad}>{children}</ClientLoadCtx.Provider>
  );
};

export function useIsClient() {
  return useContext(ClientLoadCtx);
}