import {NavItem} from "@/components/Hero/heroTypes";
import { Artwork } from "@/components/sections/typings";

export const navItems: NavItem[] = [
    {navBarTitle: "About", idLink: "#about"},
    {navBarTitle: "Education", idLink: "#education"},
    {navBarTitle: "Art", idLink: "#art"},
    {navBarTitle: "Career", idLink: "#career"},
    {navBarTitle: "Contact", idLink: "#contact"},
] as const;

export const bg = "bg-[#05142b]/90";

export const aboutText =
    'For Mihaela Tadirova, curiosity has always been a driving force, whether she’s decoding the logic behind an algorithm, shaping silence into sound, or telling a story through movement. She is driven by a deep need to connect things: people, ideas, and disciplines. Her path weaves through technology, art, and community not as separate passions, but as facets of the same pursuit to build meaningful experiences that resonate. No matter where the future leads, she is ready to meet it with both precision and imagination.'
;

export const educationData = [
    {
        id: 1,
        emoji: "🎓",
        hueA: 200,
        hueB: 250,
        title: "Faculty of Computer Science & Engineering",
        description: "Currently pursuing a degree in Software Engineering and Information Systems at FINKI, Skopje. Focused on algorithms, system design, and artificial intelligence. Expected graduation: 2025."
    },
    {
        id: 2,
        emoji: "🏫",
        hueA: 150,
        hueB: 200,
        title: "High School Diploma",
        description: "Graduated from High School with a focus on Computer Science. Developed a final-year project exploring algorithmic music generation, examining the relationship between mathematical patterns and musical composition."
    },
    {
        id: 3,
        emoji: "📚",
        hueA: 100,
        hueB: 150,
        title: "Advanced Programming Courses",
        description: "Completed several advanced programming courses including Data Structures & Algorithms, Web Development, and Database Systems. Built multiple projects demonstrating practical application of theoretical concepts."
    },
    {
        id: 4,
        emoji: "🧠",
        hueA: 50,
        hueB: 100,
        title: "AI & Machine Learning",
        description: "Self-studied machine learning concepts through online courses and personal projects. Developed neural networks for pattern recognition and implemented various algorithms from scratch."
    },
    {
        id: 5,
        emoji: "🌐",
        hueA: 0,
        hueB: 50,
        title: "Web Technologies",
        description: "Gained expertise in modern web technologies including React, Next.js, Node.js, and various CSS frameworks. Built responsive, accessible web applications with clean architecture."
    },
];

export const works: Artwork[] = [
    {
        artist: "Ornella Binni",
        art: "/image00004.jpeg?auto=format&fit=crop&w=300&q=80",
    },
    {
        artist: "Tom Byrom",
        art: "/image00013.jpeg?auto=format&fit=crop&w=300&q=80",
    },
    {
        artist: "Vladimir Malyavko",
        art: "/image00003.jpeg?auto=format&fit=crop&w=300&q=80",
    },
]
