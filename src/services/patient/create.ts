import { Patient } from "types/models/patient";
import { PatientModel } from "../../model/Patient";

export class CreatePatient {
    public async Create(firstname: string, lastname: string, sex: string, age: string, height: string, physical_activity: string, weight: string, nutritionalPlan: number, email: string, notes: string): Promise<Patient | null> {
        try {
            const newPatient = PatientModel.create({
                firstname,
                lastname,
                sex,
                age,
                height,
                physical_activity,
                weight,
                np_id: nutritionalPlan,
                email,
                notes
            });

            if (!newPatient) {
                return null;
            }

            return newPatient;

        } catch (error) {
            console.error("[Service Error]: ", error);

            return null;
        }
    }
}