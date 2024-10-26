import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://gabriel_dev_user:tFRysITUbK0EnDtctwgLZgMbWQyG64bY@dpg-cs2u2dbv2p9s738omhbg-a.oregon-postgres.render.com/gabriel_dev';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;