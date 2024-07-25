import { Patient } from "types/models/patient"

export type CreatePatientResponse = {
    message: string;
    patient?: Patient | null;
}