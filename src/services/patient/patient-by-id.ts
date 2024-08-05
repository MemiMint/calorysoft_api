import { Patient } from "../../types/models/patient";
import { PatientModel } from "../../model/Patient";

export class GetPatientByID {
    public async getPatient(id: number): Promise<Patient | null> {
        try {
            const patient: Patient = await PatientModel.findOne({ where: { id } });

            if (!patient) {
                return null;
            }

            return patient;
        } catch (error) {
            console.error("[Service Error]: ", error);

            return null;
        }
    }
}