import { PatientModel } from "../../model/Patient";
import { Patient } from "../../types/models/patient";


export class LastPatient {
    public async lastPatient(): Promise<Patient | null> {
        try {
            const lastRecord = await PatientModel.findAll({
                limit: 1,
                order: [['createdAt', 'DESC']]
            }).then((patients) => patients[0]);

            if (!lastRecord) return null;

            return lastRecord;
            
        } catch (error) {
            console.error(error);

            return null;
        }
    }
}