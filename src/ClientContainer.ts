import axios from "axios";

class ClientContainer {
    host: string;
    token: string;

    constructor(host: string, token: string) {
        this.token = token;
        this.host = host;

        // TODO: Consider doing nothing to the host
        // Alternatively, make an attempt raw, then make
        // an attempt after appending during validation
        // This way, weird server configs will work.
        if(!host.endsWith("/api/v1")) {
            this.host += "/api/v1";
        }
    }

    public async _get(endpoint: string) {
        const response = await axios.get(
            this.host+endpoint,
            {
                headers: {'Authorization': 'token '+ this.token}
            }
        );
        return response.data;
    }
}

export default ClientContainer;