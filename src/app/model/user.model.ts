export class User{
    id;
    name;
    username;
    password;
    dob;
    email;
    mobile;
    address;
    userPhoto;

    constructor(id, name, username, password, dob, email, mobile, address, userPhoto){
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.dob = dob;
        this.email = email;
        this.mobile = mobile;
        this.address = address;
        this.userPhoto = userPhoto;
    }
}
