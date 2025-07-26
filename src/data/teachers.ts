import { Teacher } from "@/types";

export const teachers: Teacher[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Mathematics Teacher",
    description:
      "An experienced mathematics teacher with a passion for teaching.",
    image: "/images/child-0.jpg",
    social: {
      facebook: "https://facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
    created_at: "2023-01-01T00:00:00Z",
    updated_at: "2023-01-02T00:00:00Z",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Science Teacher",
    description:
      "A dedicated science teacher with over 10 years of experience.",
    image: "/images/child-1.jpg",
    social: {
      facebook: "https://facebook.com/janesmith",
      twitter: "https://twitter.com/janesmith",
    },
    created_at: "2023-01-03T00:00:00Z",
    updated_at: "2023-01-04T00:00:00Z",
  },
];
