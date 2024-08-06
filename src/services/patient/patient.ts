import { GetPatients } from "./patients";
import { UpdatePatient } from "./update-patient";
import { DeletePatient } from "./delete-patient";
import { CreatePatient } from "./create";
import { GetPatientByID } from "./patient-by-id";
import { LastPatient } from "./last";
import { SearchPatients } from "./search";

export class PatientService {
    public GetPatients: GetPatients;
    public GetPatientById: GetPatientByID;
    public CreatePatient: CreatePatient;
    public DeletePatient: DeletePatient;
    public UpdatePatient: UpdatePatient;
    public LastPatient: LastPatient;
    public SearchPatients: SearchPatients;

    constructor() {
        this.GetPatients = new GetPatients();
        this.GetPatientById = new GetPatientByID();
        this.CreatePatient = new CreatePatient();
        this.DeletePatient = new DeletePatient();
        this.UpdatePatient = new UpdatePatient();
        this.LastPatient = new LastPatient();
        this.SearchPatients = new SearchPatients();
    }
}