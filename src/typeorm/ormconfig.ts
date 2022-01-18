import { Product } from "src/product/entity/product.entity";
import { ConnectionOptions } from "typeorm";
import 'dotenv/config';

interface DBConnectionOptions {
    [env: string]: ConnectionOptions;
}

const connectionOptions: DBConnectionOptions = {
    practice: {
        type: 'mysql',    
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [Product],
        synchronize: true,
    }
}

export { connectionOptions };