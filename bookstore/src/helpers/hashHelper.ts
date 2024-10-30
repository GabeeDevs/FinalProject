import crypto from 'crypto';

export const hashPassword = (password: string): string => {
  const  result = crypto.createHash('sha256').update(password).digest('hex');
  console.log(result)
  return result;
};



export const comparePassword = (password: string, hash: string): boolean => {
  return hashPassword(password) === hash;
};
