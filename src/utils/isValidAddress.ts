export const isValidAddress = (address: string): boolean => {
  // Basic Ethereum address validation (starts with 0x and is 42 characters long)
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};
