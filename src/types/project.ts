import type { Technology } from "./technology";

export interface ProjectCardProps {
    project: Project;
}

export interface Type {
    name: string;
}

export interface Project {
    id: number;
    name: string;
    slug: string;
    customer: string | null;
    description: string;
    type: Type;
    media: {
        url: string;
        type: string;
    }[];
    technologies: Technology[];
    external_link: string | null;
}
