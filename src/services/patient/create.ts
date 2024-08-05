import { Patient } from "../../types/models/patient";
import { PatientModel } from "../../model/Patient";

export class CreatePatient {
    public async Create(firstname: string, lastname: string, sex: string, age: number, height: number, physical_activity: number, weight: number, np_id: number, email: string, phonenumber: string, notes: string): Promise<Patient | null> {
        try {
            const newPatient: Patient | null = await PatientModel.create({
                firstname: firstname,
                lastname: lastname,
                sex: sex,
                age: age,
                height: height,
                physical_activity: physical_activity,
                weight: weight,
                np_id: np_id,
                email: email,
                phonenumber: phonenumber,
                notes: notes
            })

            if (!newPatient) return null;


            return newPatient;
        } catch (error) {
            console.error("[SERVICE ERROR]: ", error);
            return null;            
        }
    }
}