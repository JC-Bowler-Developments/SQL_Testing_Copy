const config = {
	user: 'sa',
	password: 'intercom',
	server: '185.46.211.198',
	database: 'GD_Tables',
	options: {
		trustedconnection: true,
		enableArithAbort: true,
		instancename: 'jbasql',
		encrypt: false,
		trustServerCertificate: true,
	},
	port: 1433,
};

module.exports = config;
