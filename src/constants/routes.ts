export enum Routes {
	API = 'https://api.github.com/graphql',
	ROOT = '/',
	LOGIN = '/login',
	OATH_LOGIN = '/login/oauth/access_token',
	PROFILE = '/profile',
	ISSUES = '/issues',
	PULL_REQUESTS = '/pull_requests',
	EXPLORE = '/explore',
	REPOSITORIES = '/repositories',
	REPOSITORY = '/repository/:username/:repository',
	// Check this: https://stackoverflow.com/questions/30012770/regex-for-username
	USER = '/users/:username',
	LOGOUT = '/logout'
}
