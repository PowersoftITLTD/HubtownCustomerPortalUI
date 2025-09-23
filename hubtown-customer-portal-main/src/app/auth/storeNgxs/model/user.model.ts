export interface User {
    userID: string;
    name: string;
    email: string;
    mobile: string;
    currentOTP: string | null;
    otpExpiry: string; // You may want to use 'Date' if it's converted to a JavaScript Date object
    isActive: boolean;
    createdBy: string | null;
    createdAt: string; // You may want to use 'Date' here as well
    modifiedBy: string | null;
    modifiedAt: string | null;
  }
  