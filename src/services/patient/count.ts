import { PatientModel } from "../../model/Patient/";

export const totalPatientCount = async (): Promise<number> => await PatientModel.count();