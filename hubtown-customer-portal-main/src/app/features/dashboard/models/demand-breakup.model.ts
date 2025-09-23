export interface DemandBreakup {
    breakupID: number;                       // Unique identifier for the breakup
    bookingID: number;                       // Identifier for the associated booking
    flatConsiderationAmt: number;            // Amount considered for the flat
    societyCharges: number;                  // Charges for the society
    society: string;                         // Name of the society
    statutoryRequirements: number;           // Statutory requirements amount
    totalWoTax: number;                      // Total amount without tax
    isActive: boolean;                       // Status indicating if the breakup is active
    createdBy: string;                       // User who created the breakup
    createdAt: string;                       // Timestamp of creation
    modifiedBy: string;                      // User who last modified the breakup
    modifiedAt: string;
  groupA_Caption: any;                      // Timestamp of last modification
  groupB_Caption: any;                     // Timestamp of last modification
  groupC_Caption: any;                     // Timestamp of last modification
  groupD_Caption: any;                     // Timestamp of last modification
  }