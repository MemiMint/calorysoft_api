import { Patient } from "types/models/patient";
import { PatientModel } from "../../model/Patient";

export class DeletePatient {
    public async delete(id: number): Promise<Patient | null> {
        try {
            const patient = await PatientModel.findByPk(id);

            await patient.destroy();

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