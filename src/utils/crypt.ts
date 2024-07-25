import bcrypt from "bcrypt";

export class PasswordEncrypter {
    private readonly SALT_ROUNDS: number = 10;

    public async EncryptPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, this.SALT_ROUNDS);
    }

    public async DoesPasswordMatch(enteredPassword: string, storedPassword: string): Promise<boolean> {
        return await bcrypt.compare(enteredPassword, storedPassword);
    }
}   