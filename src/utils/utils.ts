export const isValidEmail = (email: string) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

export const isValidPasswordNoSpecial = (password: string) => {
  // ✅ Only letters and digits, must contain at least 1 uppercase, 1 lowercase, and 1 digit
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/;
  return regex.test(password);
};

export const hasSpecialChars = (str: string): boolean => {
  const regex = /[^a-zA-Z0-9 ]/;
  return regex.test(str);
};
