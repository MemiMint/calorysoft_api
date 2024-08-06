import { Patient } from "../../types/models/patient";
import { PatientModel } from "../../model/Patient";

export class SearchPatients {
    public async search(name: string): Promise<Patient[]> {
        try {
            const patients: Patient[] = await PatientModel.findAll({
                where: {
                    firstname: name
                }
            });

            return patients;
        } catch (error) {
            console.error("[Service Error]: ", error);

            return [];
        }
    }
}