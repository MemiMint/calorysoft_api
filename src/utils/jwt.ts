import jwt from "jsonwebtoken";

type JwtPayload = {
    id: number;
    uuid: string;
    username: string;
    firstname: string;
    lastname: string;
    role: number
}

export class JSONWebTokenHandler {    
    public create(payload: JwtPayload) {
        return jwt.sign(payload, process.env.JWT_SECRET);
    }

    public getPayload(token: string): JwtPayload {
        console.log("JWT SECRET: ", process.env.JWT_SECRET!);

        const payload = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

        console.log("payload: ", payload);

        return payload as JwtPayload;
    }
}