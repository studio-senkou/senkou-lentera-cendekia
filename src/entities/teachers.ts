import { Teacher } from '@/shared/types'

export const teachers: Array<Teacher> = [
    {
        id: 1,
        name: 'Kak Budi',
        role: 'Spesialis Matematika',
        description: 'Pembelajaran matematika jadi seru dan mudah dipahami bareng Kak Budi. Rumus-rumus sulit jadi terasa gampang!',
        image: '/images/child-0.jpg',
        social: {
            facebook: 'https://facebook.com/',
            twitter: 'https://twitter.com/',
            instagram: 'https://instagram.com/',
            linkedin: 'https://linkedin.com/in/',
        },
        created_at: '2023-01-01T00:00:00Z',
        updated_at: '2023-01-02T00:00:00Z',
    },
    {
        id: 2,
        name: 'Kak Siti',
        role: 'Spesialis Sains',
        description: 'Eksperimen seru dan fakta sains menarik selalu hadir di kelas Kak Siti. Belajar IPA jadi petualangan yang menyenangkan.',
        image: '/images/child-1.jpg',
        social: {
            facebook: 'https://facebook.com/',
            twitter: 'https://twitter.com/',
        },
        created_at: '2023-01-03T00:00:00Z',
        updated_at: '2023-01-04T00:00:00Z',
    },
    {
        id: 3,
        name: 'Kak Andi',
        role: 'Spesialis Bahasa',
        description: 'Tingkatkan kemampuan bahasa Inggris dan Indonesia kamu dengan metode interaktif bersama Kak Andi.',
        image: '/images/child-0.jpg',
        social: {
            instagram: 'https://instagram.com/',
        },
        created_at: '2023-01-05T00:00:00Z',
        updated_at: '2023-01-06T00:00:00Z',
    },
]
