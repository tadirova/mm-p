export interface AboutData{
    title: string,
    image: string,
    description: string
}

export type EducationItem = {
    id: number;
    emoji: string;
    hueA: number;
    hueB: number;
    title: string;
    description: string;
};

export type CardProps = {
    emoji: string;
    hueA: number;
    hueB: number;
    index: number;
};

export type MilestoneProps = {
    id: number;
    title: string;
    description: string;
};

export type CombinedEducationProps = {
    educationData: EducationItem[];
};

export type Artwork = {
    artist: string;
    art: string;
    description?: string;
};

export type Art = {
    artworks: Artwork[];
    content: string;
    title?: string;
};

export type ScrollAreaHorizontalDemoProps = {
    items: Artwork[];
    className?: string;
};

export type ArtArticleProps = {
    art: Art;
    className?: string;
};