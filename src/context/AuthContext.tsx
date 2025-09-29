"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define user type
type User = {
  id: string;
  name: string;
  email: string;
};

// Define context type
type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
};

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  login: async () => false,
  signup: async () => false,
  logout: () => {},
  isAuthenticated: false,
});

// Hook to use auth context
export const useAuth = () => useContext(AuthContext);

// Provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('motorlab_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse user from localStorage', error);
        localStorage.removeItem('motorlab_user');
      }
    }
    setIsLoading(false);
  }, []);

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    // This is a demo, so we're not doing real authentication
    // In a real app, this would call an API
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Create a mock user
    const newUser = {
      id: Date.now().toString(),
      name: email.split('@')[0], // Use part of email as name
      email,
    };
    
    // Store in localStorage
    localStorage.setItem('motorlab_user', JSON.stringify(newUser));
    setUser(newUser);
    return true;
  };

  // Signup function
  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    // This is a demo, so we're not doing real authentication
    // In a real app, this would call an API
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Create a new user
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
    };
    
    // Store in localStorage
    localStorage.setItem('motorlab_user', JSON.stringify(newUser));
    setUser(newUser);
    return true;
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('motorlab_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isLoading, 
        login, 
        signup, 
        logout, 
        isAuthenticated: !!user 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
