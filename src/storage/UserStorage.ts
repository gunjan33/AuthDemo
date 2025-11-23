import { Storage } from './Storage';

// Type definition for user object structure
export type UserType = {
  id: string;
  name: string;
  email: string;
  password: string;
};

// Save new user if email does not already exist
export const saveUser = (newUser: UserType): boolean => {
  const existingUsers = getAllUsers();
  const foundUser = existingUsers.find(
    eu => eu.email.trim().toLowerCase() === newUser.email.trim().toLowerCase()
  ); 
  
  if (foundUser) {
    return false;
  } else {
    existingUsers.push({ ...newUser });
    Storage.set('users', JSON.stringify(existingUsers));
    return true; 
  }
};

// Get all users from storage and parse them
export const getAllUsers = (): UserType[] => {
  const storedUsers = Storage.getString('users'); 
  return storedUsers ? JSON.parse(storedUsers) : []; 
};

// Authenticate user by matching email and password
export const loginUser = (email: string, password: string): UserType | null => {
  const users = getAllUsers(); 
  
  const foundUser = users.find(u => {
    return (
      u.email.trim().toLowerCase() === email.trim().toLowerCase() &&
      u.password === password
    ); 
  });
  return foundUser || null; 
};

// Remove specific user by userId
export const deleteUser = (userId: string) => {
  const users = getAllUsers(); 
  const filtered = users.filter(u => u.id !== userId);
  Storage.set('users', JSON.stringify(filtered)); 
};

// Clear all users from storage
export const clearAllUsers = () => {
  Storage.delete('users'); 
};
