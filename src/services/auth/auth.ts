import { Me } from "./me";
import { SignIn } from "./signin";
import { SignUp } from "./signup";

export class AuthService {
    public SignIn: SignIn;
    public SignUp: SignUp;
    public Me: Me;

    constructor() {
        this.SignIn = new SignIn();
        this.SignUp = new SignUp();
        this.Me = new Me();
    }
}