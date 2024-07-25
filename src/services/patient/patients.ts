import { Patient } from "types/models/patient";
import { PatientModel } from "../../model/Patient";

export class GetPatients {
    public async patients(): Promise<Patient[]> {
        try {
            const patients: Patient[] = await PatientModel.findAll();

            return patients;
        } catch (error) {
            console.error("[Service Error]: ", error);

            return [];
        }
    }
}