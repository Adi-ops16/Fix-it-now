import dotenv from 'dotenv';
import path from 'node:path';
dotenv.config({ path: path.join(process.cwd(), '.env'), quiet: true });
export default {
    database_url: process.env.DATABASE_URL,
    port: process.env.PORT || 3000,
    app_url: process.env.APP_URL,
    node_env: process.env.NODE_ENV,
    bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
    jwt_access_secret: process.env.JWT_ACCESS_SECRET
};
//# sourceMappingURL=index.js.map