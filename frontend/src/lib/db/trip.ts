import pool from '@/lib/db/db';

export async function getTrips(){
    const result = await pool.query('SELECT * FROM egitimler');
    return result.rows;
}