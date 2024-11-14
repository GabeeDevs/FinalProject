import { Pool } from 'pg';

const connectionString = 'postgresql://javascripto_ehga_user:0T25TwfB5gn68b3tau8kZ2oO2PQ84jTD@dpg-csqskmlumphs73d7urq0-a.oregon-postgres.render.com/javascripto_ehga';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  }
});

export default pool;