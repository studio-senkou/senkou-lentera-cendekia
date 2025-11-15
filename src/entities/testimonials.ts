import { Testimony } from '@/shared/types'

export const testimonials: Array<Testimony> = [
    {
        id: 1,
        testimoner: 'John Doe',
        testimoner_position: 'Parent',
        quote: "The personalized tutoring sessions have made a significant difference in my child's learning journey. The tutors are knowledgeable and truly care about their students' success.",
        image: '/images/child-1.jpg',
        created_at: '2023-10-01T12:00:00Z',
        updated_at: '2023-10-01T12:00:00Z',
    },
    {
        id: 2,
        testimoner: 'Jane Smith',
        testimoner_position: 'Parent',
        quote: 'I appreciate the flexible scheduling and the variety of subjects offered. My child has shown great improvement in math and science.',
        image: '/images/child-0.jpg',
        created_at: '2023-10-02T12:00:00Z',
        updated_at: '2023-10-02T12:00:00Z',
    },
    {
        id: 3,
        testimoner: 'Alice Johnson',
        testimoner_position: 'Student',
        quote: "The tutors are patient and understanding. They tailor their approach to fit my child's unique learning style.",
        image: '/images/child-1.jpg',
        created_at: '2023-10-03T12:00:00Z',
        updated_at: '2023-10-03T12:00:00Z',
    },
]
