import sql from "mssql";
import config from "../../config";

export const dbSettings = {
  user: config.dbUser,
  password: config.dbPassword,
  server: config.dbServer,
  database: config.dbDatabase,
  instanceName: config.dbInstaceName,
  port: parseInt(config.dbport),
  options: {
    encrypt: false, // for azure
    trustedconnection : true,
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

export const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error(error);
  }
};

export { sql };