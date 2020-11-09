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
	REPOSITORY = '/repository/^(?![-]).[A-Za-z0-9-]((?!-|-).)(?<![-]){1,39}$/^(?![_-]).[A-Za-z0-9_-]((?!_-|-_).)(?<![-_]){3,9}$',
	// Check this: https://stackoverflow.com/questions/30012770/regex-for-username
	USER = ' /users/^(?![-]).[A-Za-z0-9-]((?!-|-).)(?<![-]){1,39}$',
	LOGOUT = '/logout'
}
