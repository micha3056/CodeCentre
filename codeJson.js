var commandsJson = `
[
	{
		"section": "npm",
		"text": 
			"for installing packages listed use <kbd>npm install</kbd> reseting database <kbd>npm reset</kbd> for setting up the database <kbd>npm run build</kbd><br> for migration use <kbd>npx prisma migrate resolve --applied 20210426141759_initial-migration-for-db</kbd> or <kbd>npx prisma db push --accept-data-loss</kbd><br> for lintering <kbd>npm run lint</kbd> or <kbd>run lint-- --fix</kbd><br>"
	},
	{
		"section": "windows commands",
		"text": "to kill a service on port 3000, find PID <kbd>netstat -ano | findstr :3000</kbd> and kill the service with <kbd>taskkill /F /pid 8688</kbd> ssh key generator <kbd>ssh-keygen</kbd>"
	},
	{
		"section": "VSCODE ShortCuts",
		"text": "Jump to Line: <kbd>STRG + G</kbd> Find in Files: <kbd>???</kbd> Find File: <kbd>STRG + P</kbd> Configuration: <kbd>STRG + SHIFT + PP</kbd> Console Log Rocket: <kbd>STRG + ALT + L</kbd> Duplicate Line: <kbd>ALT + SHIFT + DOWN</kbd>"
	},
	{
		"section": "FLY IO & Crawler",
		"text": "to login: <kbd>???</kbd>, to deploy: <kbd>???</kbd>, to dump a database: <kbd>???</kbd> to start the crawler make it headless in code, start the backend <kbd>npm run dev</kbd> and <kbd>npx playwright test freelance</kbd>"
	}
]
`;

// netstat -ano | findstr :3000
// taskkill /F /pid 8688
// <kbd></kbd>