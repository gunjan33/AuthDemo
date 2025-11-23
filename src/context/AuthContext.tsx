import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { loginUser, saveUser, UserType, clearAllUsers } from '../storage/UserStorage';
import { Storage } from '../storage/Storage';

// Define the structure of authentication context
type AuthContextType = {
  user: UserType | null; 
  login: (email: string, password: string) => boolean; 
  register: (userData: { name: string, email: string, password: string }) => void;
  logout: () => void; 
};

// Create authentication context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Context provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null); // State to hold logged in user

  // Load user from storage on initial render
  useEffect(() => {
    const storedUser = Storage.getString('loggedInUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Handle user login
  const login = (email: string, password: string): boolean => {
    const foundUser = loginUser(email.trim().toLowerCase(), password);
    if (foundUser) {
      setUser(foundUser);
      Storage.set('loggedInUser', JSON.stringify(foundUser)); 
      return true;
    }
    return false;
  };

  // Handle new user registration
  const register = (userData: { name: string, email: string, password: string }): boolean => {
    const newUser: UserType = {
      id: Date.now().toString(), 
      name: userData.name,
      email: userData.email.trim().toLowerCase(),
      password: userData.password,
    };
    return saveUser(newUser); 
  };

  // Handle user logout
  const logout = () => {
    Storage.delete('loggedInUser'); 
    setUser(null);
  };

  // Provide user data and auth functions to child components
  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
