import { DeleteAssistant } from "./delete";
import { GetAssistants } from "./assistants";
import { UpdateAssistant } from "./update";
import { GetAssistant } from "./get-assistant";

export class AssistantService {
    public getAssistants: GetAssistants;
    public deleteAssistant: DeleteAssistant;
    public updateAssistant: UpdateAssistant;
    public getAssistant: GetAssistant;

    constructor() {
        this.getAssistants = new GetAssistants();
        this.deleteAssistant = new DeleteAssistant();
        this.updateAssistant = new UpdateAssistant();
        this.getAssistant = new GetAssistant();
    }
}