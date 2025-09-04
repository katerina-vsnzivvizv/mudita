import pool from '@/lib/db/db';

export async function getTrips(){
    const result = await pool.query('SELECT * FROM egitimler');
    return result.rows;
}

export async function getTripById(id:number) {
    const result = await pool.query(
        'SELECT * FROM egitimler WHERE id = $1 LIMIT 1',
        [id]
    );
    return result.rows[0] || null;
}