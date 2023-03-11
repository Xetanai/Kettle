import ClientContainer from "./ClientContainer";
import Repository from "./Models/Repository";
import User from "./Models/User";

class Kettle extends ClientContainer {
    // TODO: Make custom errors that are easier to catch and handle
    // than the axios ones currently forwarded

    constructor(host: string, token: string) {
        super(host, token);
        // TODO: Test the credentials.
        // We can do this by checking version with the server
        // Or, fetch our SelfUser to go ahead and cache it
        // TODO: Also confirm both above endpoints error on incorrect creds
        // TODO: Also also, see if unauthenticated Clients are possible
    }

    // TODO: Cache
    /**
     * @returns The User this object makes requests as
     */
    public getSelfUser(): Promise <User> {
        return User._get(this);
    }

    /**
     * 
     * @param username The username of the target, or null for self
     * @returns The User, if they exist
     */
    public getUser(username?: string): Promise <User> {
        return User._get(this, username);
    }

    public getRepository(ownerOrOwnRepositoryName: string, repositoryName?: string): Promise<Repository> {
        return Repository._get(this, ownerOrOwnRepositoryName, repositoryName);
    }

    public _getClientContainer() {
        return new ClientContainer(this.host, this.token);
    }

    public static getClientUser(client: ClientContainer): Promise<User> {
        return User._get(client);
    }
}

export default Kettle;