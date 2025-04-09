import { createContext, useContext } from "react";

export interface User {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  register: (user: Omit<User, "id">) => User;
  logout: () => void;
}

// setting the context
export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: () => {},
  register: () => ({} as User),
  logout: () => {},
});

// create custom hook
export const useAuthContext = () => useContext(AuthContext);
