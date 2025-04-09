import { useState, useEffect, ReactNode } from "react";
import { AuthContext, User } from "./AuthContext";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

   // check if the user is logged
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

   // check if the user is registered
  const login = (email: string, password: string): void => {
    try {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const foundUser = users.find((u: User) => u.email === email && u.password === password);

      if (!foundUser) {
        throw new Error("Email or password is incorrect!");
      }

      localStorage.setItem("user", JSON.stringify(foundUser));

      setUser(foundUser);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

   // check if email already exists
  const register = (newUser: Omit<User, "id">): User => {
    try {
      const users = JSON.parse(localStorage.getItem("users") || "[]");

      if (users.some((u: User) => u.email === newUser.email)) {
        throw new Error("Email already exists!");
      }

      const user: User = {
        id: Date.now().toString(),
        email: newUser.email,
        password: newUser.password,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        address: newUser.address,
        city: newUser.city,
      };

      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));

      return user;
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  };

   // delete current user
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
