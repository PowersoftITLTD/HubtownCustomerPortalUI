export interface GenerateOtpModel {
    emailID: string | null;
    mobileNumber: string | null;
  }

export interface VerifyOtpModel {
    userID: string | null;
    enteredOTP: string | null;
    isAdmin?:boolean
}
  