import {NavItem} from "@/components/Hero/heroTypes";
import {Art} from "@/components/sections/typings";

export const navItems: NavItem[] = [
    {navBarTitle: "About", idLink: "#about"},
    {navBarTitle: "Education", idLink: "#education"},
    {navBarTitle: "Art", idLink: "#art"},
    {navBarTitle: "Career", idLink: "#career"},
    {navBarTitle: "Contact", idLink: "#contact"},
] as const;

export const bg = "bg-[#334353]/90";

export const aboutText =
    'For Mihaela Tadirova, curiosity has always been a driving force, whether she’s decoding the logic behind an algorithm, shaping silence into sound, ' +
    'or telling a story through movement. She is driven by a deep need to connect things: people, ideas, and disciplines. Her path weaves through technology, art, ' +
    'and community not as separate passions, but as facets of the same pursuit to build meaningful experiences that resonate. No matter where the future leads, she is ready to meet it with both precision and imagination.'
;

export const careerText =
    'Despite the uncertainty of the future, I’m certain about one thing: I want to use technology to connect people and make a difference, even if it’s just for one person. My path into software engineering began with a love for music, which evolved into a fascination with the patterns shared by both sound and code. Starting with C++ and algorithmic thinking, my interests expanded to Quantum Computing, especially its creative potential. This led to my thesis on Quantum Computer Music, where I explored tools like Max for Live, Qutune, Qiskit, and Python. I believe that blending music and computing can unlock new ways of approaching both human and technical challenges.';

export const eduText =
    'I study Software Engineering and Information Systems at the Faculty of\n' +
    '                    Computer Science and Engineering (FINKI) in Skopje, Macedonia. My\n' +
    '                    academic path is rooted in a long-standing curiosity about how things\n' +
    '                    work beneath the surface - particularly in the intersection between\n' +
    '                    creativity and logic. In high school, I gravitated toward subjects\n' +
    '                    related to computing, which naturally led me to develop a final-year\n' +
    '                    project focused on algorithmic music and the relationship between sound\n' +
    '                    and code. The most compelling areas of study for me involve algorithms,\n' +
    '                    artificial intelligence, and systems design - fields where structured\n' +
    '                    logic meets creative problem-solving.';

export const educationData = [
    {
        id: 1,
        emoji: "🎓",
        hueA: 200,
        hueB: 250,
        title: "Front-end",
        description: "In high school, I won first place in the 2023 state web portfolio design competition. Through that experience, I gained practical knowledge of HTML, CSS, JavaScript, Tailwind and various libraries, which laid the foundation for my front-end development skills. "
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
        title: "Projects",
        description: "I've participated in impactful projects, including building a full theater for children with disabilities, where I served as the sound engineer. Through Erasmus+, I worked on inclusive initiatives focused on kids with disabilities. During quarantine, I joined VADA Creative Dance Online, collaborating with professional dancers from New York. I also took part in ACCESS, where we connected with successful Macedonians in the U.S., greatly improving my communication and intercultural skills. "
    },
    {
        id: 4,
        emoji: "🧠",
        hueA: 50,
        hueB: 100,
        title: "Math",
        description: "I learned elementary linear algebra through dedication and self-study, consistently ranking in the top 3 at high school regional competitions. I also received a state-level appreciation certificate in analytical geometry. Recently, I successfully passed both discrete mathematics and calculus. "
    },
    {
        id: 5,
        emoji: "🌐",
        hueA: 0,
        hueB: 50,
        title: "Technologies",
        description: "I have hands-on experience with C++ and object-oriented programming, including designing OO systems that effectively reflect user requirements. My background in Object-Oriented Programming and Object-Oriented Analysis and Design taught me how to translate real-world needs into scalable, maintainable software architectures that align with user expectations. "
    },
];

export const fineArts: Art = {
    title: "My Musical Journey",
    artworks: [
        {
            artist: "Art Colony Exhibition 2024",
            art: "/art_2.webp",
        },
        {
            artist: "Exhibition 2024",
            art: "/art_3.webp",
        },
        {
            artist: "Art Colony Exhibition 2023",
            art: "/art_1.webp",
        },
        {
            artist: "Tate modern museum",
            art: "/museumART.webp",
        },
    ],
    content: `
   I am constantly amazed by the beauty and complexity of the world around me, and creating art allows me to capture that beauty and share it with others.
    For me, there is nothing more rewarding than creating something that brings joy and inspiration to me and everyone around me.
The process of creating something from nothing, using only my imagination and the tools ar hand is deeply satisfying and peaceful.

  `
};

export const musicArts: Art = {
    title: "Photography Work",
    artworks: [
        {
            artist: "Gig @DomNaMladi-Stip",
            art: "/dj_1.webp",
        },
        {
            artist: "Playing piano",
            art: "/piano_1.webp",
        },
        {
            artist: "Playing piano",
            art: "/piano_2.webp",
        },
    ],
    content: `
The first time I saw a grand piano in real life, I knew it would become a significant part of me. Soon after,
 I began piano lessons and music theory, which opened up a new way of perceiving the world, even everyday sounds. 
 A simple knock on the door suddenly had a different dimension. I started composing at nine, and performing in 
 competitions helped me overcome one of my greatest fears: being alone on stage. Later, I joined projects working with
  people with disabilities, drawing on my Erasmus+ experience in Portugal where I explored how they engage with sound and art. 
  This year, my path shifted as I began DJing. Electronic music and club culture have always fascinated me the shared experiences, 
  the sense of connection. Since then, I’ve played gigs in over five cities, 
  developing new technical skills and seeing music from a fresh perspective.
`
};

export const danceArt: Art = {
    title: "Photography Work",
    artworks: [

        {
            artist: "The Myth of Sisyphus Performance" ,
            art: "/ballet_2.webp",
        },
        {
            artist: "Teammates",
            art: "/ballet_3.webp",
        },

        {
            artist: "No Borders Performance",
            art: "/ballet_1.webp",
        },


    ],
    content: `
  I’ve been dancing for about 14 years, and I’m still a proud member of the same dance team, “Gazeli,” that I joined at the beginning of my journey. Through dance, I discovered how to hold myself on stage and build genuine confidence.
This art form has brought me lifelong friendships and unforgettable experiences. With my team, I’ve had the chance to travel and compete in places like Italy, Turkey, and Serbia, as well as in numerous competitions at home.
These travels expanded my horizons, introducing me to diverse cultures, traditions, and landmarks. Dance has given me a profound sense of freedom and proven that when you pursue what you love, the rewards are limitless.
  `
};

