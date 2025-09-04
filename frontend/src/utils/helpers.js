import { getBeachById } from '@/lib/db/beaches';

export function toSlug(text) {
    const turkishMap = {
        'ş': 's',
        'Ş': 's',
        'ı': 'i',
        'İ': 'i',
        'ç': 'c',
        'Ç': 'c',
        'ü': 'u',
        'Ü': 'u',
        'ö': 'o',
        'Ö': 'o',
        'ğ': 'g',
        'Ğ': 'g'
    };

    return text
        .split('')
        .map(char => turkishMap[char] || char)
        .join('')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}


import { getBeaches } from '@/lib/db/beaches';

export async function getAllBeachSlugs() {
    const beaches = await getBeaches();

    return beaches.map(beach => ({
        slug: `${beach.id}-${toSlug(beach.title)}`,
    }));
}

import { getTrips } from '@/lib/db/trips';

export async function getAllTripSlugs() {
    const trips = await getTrips();

    return trips.map(trip => ({
        slug: `${trip.id}-${toSlug(trip.title)}`,
    }));
}