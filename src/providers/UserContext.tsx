import React, { createContext, useState } from 'react';

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
  // tipar variaveis exportadas
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {


  return <UserContext.Provider value={{
  }}>{children}</UserContext.Provider>;
};
