import { Program } from '@/shared/types/response'

export const dummyPrograms: Array<Program> = [
    {
        id: 1,
        image_url: 'https://is3.cloudhost.id/lentera-cendekia/programs/BIMBINGAN-SD',
        title: 'Bimbingan Belajar SD',
        description: 'Program bimbingan belajar untuk siswa SD yang dirancang untuk membangun fondasi akademik yang kuat sejak dini.',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: 2,
        image_url: 'https://is3.cloudhost.id/lentera-cendekia/programs/BIMBINGAN-SMP',
        title: 'Bimbingan Belajar SMP',
        description: 'Program bimbingan belajar untuk siswa SMP yang dirancang untuk membangun pemahaman konsep yang kuat.',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: 3,
        image_url: 'https://is3.cloudhost.id/lentera-cendekia/programs/BIMBINGAN-SMA',
        title: 'Bimbingan Belajar SMA',
        description: 'Program bimbingan belajar untuk siswa SMA yang dirancang untuk mempersiapkan mereka menghadapi tantangan akademik dan ujian masuk perguruan tinggi.',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: 4,
        image_url: 'https://is3.cloudhost.id/lentera-cendekia/programs/BIMBINGAN-UTBK',
        title: 'Program Intensif UTBK',
        description: 'Program intensif persiapan UTBK yang dirancang untuk membantu siswa meraih skor tinggi dan masuk ke perguruan tinggi impian mereka.',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: 5,
        image_url: 'https://is3.cloudhost.id/lentera-cendekia/programs/ENLGISH-FOR-KIDS',
        title: 'English for Kids',
        description: 'Program pembelajaran bahasa Inggris untuk anak-anak yang dirancang untuk membangun kemampuan bahasa sejak dini dengan metode yang menyenangkan.',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    }
]
