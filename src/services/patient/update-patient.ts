import { Patient } from "../../types/models/patient";
import { PatientModel } from "../../model/Patient";

export class UpdatePatient {
    public async update(id: number, data: Partial<Patient> ): Promise<Patient | null> {
        try {
            const patient = await PatientModel.findByPk(id);

            patient.firstname = data.firstname;
            patient.lastname = data.lastname;
            patient.sex = data.sex;
            patient.age = data.age;
            patient.height = data.height;
            patient.physical_activity = data.physical_activity;
            patient.weight = data.weight;
            patient.np_id = data.np_id;
            patient.email = data.email;
            patient.notes = data.notes;

            await patient.save();


            return patient;
        } catch (error) {
            console.error("[Service Error]: ", error);

            return null;
        }
    }
}