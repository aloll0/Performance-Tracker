import argon2 from "argon2";

export const hashPass = async (password) => {
  const hashedPassword = await argon2.hash(password);
  return hashedPassword;
};

export const verifyPass = async (hasedPass, userPassword) => {
  const verifyPass = await argon2.verify(hasedPass, userPassword);
  if (verifyPass) {
    return true;
  } else {
    return false;
  }
};
