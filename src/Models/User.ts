import axios from "axios";
import ClientContainer from "../ClientContainer";
import Kettle from "../Kettle";
import Repository from "./Repository";

class User {
    readonly api: ClientContainer;

    readonly avatar_url!: string;
    readonly created!: string; // Date-time
    readonly email!: string; // Email
    readonly full_name!: string;
    readonly id!: number;
    readonly is_admin!: boolean;
    readonly language!: string;
    readonly last_login!: string; // Date-time
    readonly login!: string;
    readonly restricted!: boolean;

    constructor(client: ClientContainer, data: any) {
        Object.assign(this, data);
        this.api = client;
    }

    public equals(user: User) {
        return this.id === user.id;
    }

    public static async _get(client: ClientContainer, username?: string) {
        let res = null;
        if(username === undefined) {
            res = await client._get('/user');
        } else {
            res = await client._get('/users/'+ username);
        }

        return new User(client, res);
    }

}

export default User;