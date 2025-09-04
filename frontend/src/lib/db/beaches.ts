import pool from '@/lib/db/db';

export async function getBeaches(){
    const result = await pool.query('SELECT * FROM beaches');
    return result.rows;
}

export async function getBeachById(id:number) {
    const result = await pool.query(
        'SELECT * FROM beaches WHERE id = $1 LIMIT 1',
        [id]
    );
    return result.rows[0] || null;
}