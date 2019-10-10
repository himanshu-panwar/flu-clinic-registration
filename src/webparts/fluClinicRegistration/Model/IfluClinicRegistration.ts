export interface IfluClinicRegistration {
    Location: string;
    User: string; 
    selectedSlot?: { key: string | number | undefined };
    required:string;
    onSubmission:boolean;
}