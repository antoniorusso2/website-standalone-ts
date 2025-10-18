export interface Technology {
    id: number;
    name: string;
    level: number;
    color: string;
    icon_external_url: string;
}

export interface TechBadgeProps {
    technology: Technology;
}
