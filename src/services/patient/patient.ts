import { GetPatients } from "./patients";
import { UpdatePatient } from "./update-patient";
import { DeletePatient } from "./delete-patient";
import { CreatePatient } from "./create";
import { GetPatientByID } from "./patient-by-id";

export class PatientService {
    public GetPatients: GetPatients;
    public GetPatientById: GetPatientByID;
    public CreatePatient: CreatePatient;
    public DeletePatient: DeletePatient;
    public UpdatePatient: UpdatePatient;

    constructor() {
        this.GetPatients = new GetPatients();
        this.GetPatientById = new GetPatientByID();
        this.CreatePatient = new CreatePatient();
        this.DeletePatient = new DeletePatient();
        this.UpdatePatient = new UpdatePatient();
    }
}