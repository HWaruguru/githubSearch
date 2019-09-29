export class User {
    constructor(
        login: string,
        email: string,
        location: string,
        blog: string,
        created_at: string,
        followers: string,
        following: string,
        public_repos: string,
        public_gists: string,
        bio: string,
        name?: string,
    ) {}
}
