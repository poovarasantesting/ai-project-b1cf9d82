import { useState, useEffect } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthStatus {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Simple mock implementation - in a real app this would connect to a backend
export function useAuthStatus(): AuthStatus {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check local storage for auth state on component mount
    const storedUser = localStorage.getItem("user");
    const storedAuth = localStorage.getItem("isAuthenticated");
    
    if (storedAuth === "true" && storedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock login logic - in a real app this would call an API
    if (email && password.length >= 6) {
      const mockUser: User = {
        id: "user-123",
        name: email.split("@")[0],
        email: email,
      };
      
      setUser(mockUser);
      setIsAuthenticated(true);
      
      // Store in localStorage for persistence
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify(mockUser));
      
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
  };

  return {
    isAuthenticated,
    user,
    login,
    logout,
  };
}