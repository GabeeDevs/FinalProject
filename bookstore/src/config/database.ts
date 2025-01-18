import { Pool } from 'pg';

const connectionString = 'postgresql://testee_user:AMXfXXzlrtC7lgLVyB7TF3nyKh4a2pGN@dpg-cu5uav8gph6c73c1oqsg-a.oregon-postgres.render.com/testee';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  }
});

export default pool;