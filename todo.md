# Endpoint coverage todo list

**In order of appearance on `/api/swagger`**

---

## Admin
Methods | Endpoint
------- | --------
`get` | `/admin/cron`
`post` | `/admin/cron/{task}`
`get` | `/admin/orgs`
`get` | `/admin/unadopted`
`post, delete` | `/admin/unadopted/{owner}/{repo}`
`get, post` | `/admin/users`
`delete, patch` | `/admin/users/{username}`
`post` | `/admin/users/{username}/keys`
`delete` | `/admin/users/{username}/keys/{id}`
`post` | `/admin/users/{username}/orgs`
`post` | `/admin/users/{username}/repos`
---
## Miscellaneous
Methods | Endpoint
------- | --------
`post` | `/markdown`
`post` | `/markdown/raw`
`get` | `/signing-key.gpg`
`get` | `/version`
---
## Notifications
Methods | Endpoint
------- | --------
`get, put` | `/notifications`
`get` | `/notifications/new`
`get, patch` | `/notifications/threads/{id}`
`get, put` | `/repos/{owner}/{repo}/notifications`
## Organizations
Methods | Endpoint
------- | --------
`get, post` | `/orgs`
`get, delete, patch` | `/orgs/{org}`
`get, post` | `/orgs/{org}/hooks`
`get, delete, patch` | `/orgs/{org}/hooks/{id}`
`get, post` | `/orgs/{org}/labels`
`get, delete, patch` | `/orgs/{org}/labels/{id}`
`get` | `/orgs/{org}/members`
`get, delete` | `/orgs/{org}/members/{username}`
`get` | `/orgs/{org}/public_members`
`get, put, delete` | `/orgs/{org}/public_members/{username}`
`get, post` | `/orgs/{org}/repos`
`get, post` | `/orgs/{org}/teams`
`get` | `/orgs/{org}/teams/search`
`get, delete, patch` | `/teams/{id}`
`get` | `/teams/{id}/members`
`get, put, delete` | `/teams/{id}/members/{username}`
`get` | `/teams/{id}/repos`
`put, delete` | `/teams/{id}/repos/{org}/{repo}`
`get` | `/user/orgs`
`get` | `/users/{username}/orgs`
## Issues
Methods | Endpoint
------- | --------

**Holy shit there's a lot here. I'm just gonna not right now.**

**Completed**: /user, /users/{username}