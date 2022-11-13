module.exports = {
	apps: [
		{
			name: "home",
			exec_mode: "cluster",
			instances: 1,
			script: "./.output/server/index.mjs",
			env: {
				PORT: 3003,
				// REDIS_PORT: 6378,
			},
		},
	],
};
