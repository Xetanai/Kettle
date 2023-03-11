import ClientContainer from "../ClientContainer";
import Kettle from "../Kettle";
import User from "./User";

class Repository {
    readonly api: ClientContainer;

    // TODO: Implement outcommented properties
    allow_merge_commits!: boolean;
    allow_rebase!: boolean;
    allow_rebase_explicit!: boolean;
    allow_squash_merge!: boolean;
    archived!: boolean;
    avatar_url!: string;
    clone_url!: string;
    created_at!: string; // Date-time
    default_branch!: string;
    description!: string;
    empty!: boolean;
    // external_tracker: ExternalTracker;
    // external_wiki: ExternalWiki;
    fork!: boolean;
    forks_count!: number;
    full_name!: string;
    has_issues!: boolean;
    has_projects!: boolean;
    has_pull_requests!: boolean;
    has_wiki!: boolean;
    html_url!: string;
    id!: number;
    ignore_whitespace_conflicts!: boolean;
    internal!: boolean;
    // internal_tracker: InternalTracker;
    mirror!: boolean;
    mirror_interval!: string;
    name!: string;
    open_issues_count!: number;
    open_pr_counter!: number;
    original_url!: string;
    owner: User;
    // TODO: Research this. Swagger says it's an empty, typeless object.
    // Interestingly enough, in practice it sometimes doesn't exist at all.
    // Current theory is a shallow copy of a fork's source.
    parent: unknown; 
    // permissions: Permission;
    private!: boolean;
    release_counter!: number;
    size!: number;
    ssh_url!: string;
    stars_count!: number;
    template!: boolean;
    updated_at!: string; //Date-time
    watchers_count!: number;
    website!: string;

    constructor(client: ClientContainer, data: any) {
        Object.assign(this, data);

        this.owner = new User(client, data.owner);
        this.api = client;
    }

    public equals(repo: Repository)
    {
        return this.id === repo.id;
    }

    public static async _get(client: ClientContainer, ownerOrOwnRepositoryName: string, repositoryName?: string) {
        // In most cases, both parameters are filled
        let owner = ownerOrOwnRepositoryName;
        let repository = repositoryName;

        if (repositoryName == undefined) {
            // No owner was given, we can assume we want our client's own repository
            // ownerOrOwnRepositoryName is assumed to be the repository name

            // TODO: Cache our selfuser and get this from cache
            owner = (await User._get(client)).login;
            repository = ownerOrOwnRepositoryName;
        }

        const res = await client._get(`/repos/${owner}/${repository}`);

        return new Repository(client, res);
    }

}

export default Repository;