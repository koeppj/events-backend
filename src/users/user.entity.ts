export class User {
    public boxname: string;
    public email: string
    password: string
    public boxid: string

    constructor(boxname: string, email: string, password: string, boxid: string) {
        this.boxname = boxname;
        this.email = email;
        this.password = password;
        this.boxid = boxid;
    }   
}