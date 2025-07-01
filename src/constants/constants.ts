import { NavItem } from "@/components/Hero/heroTypes";

export const navItems: NavItem[] = [
  { navBarTitle: "About", idLink: "#about" },
  { navBarTitle: "Education", idLink: "#education" },
  { navBarTitle: "Art", idLink: "#art" },
  { navBarTitle: "Career", idLink: "#career" },
  { navBarTitle: "Contact", idLink: "#contact" },
] as const;

export const bg = "bg-[#05142b]/90";

export const aboutText =
    'For Mihaela Tadirova, curiosity has always been a driving force, whether she’s decoding the logic behind an algorithm, shaping silence into sound, or telling a story through movement. She is driven by a deep need to connect things: people, ideas, and disciplines. Her path weaves through technology, art, and community not as separate passions, but as facets of the same pursuit to build meaningful experiences that resonate. No matter where the future leads, she is ready to meet it with both precision and imagination.'
;

export const educationData = [
  {
    id: 1,
    description:
      "Bachelor's Degree in Computer Science - Focused on algorithms, data structures, and software engineering principles. Graduated with honors.",
  },
  {
    id: 2,
    description:
      "Master's in Artificial Intelligence - Specialized in machine learning, neural networks, and natural language processing. Thesis on transformer models.",
  },
  {
    id: 3,
    description:
      "UX Design Certification - Completed intensive program covering user research, interaction design, and prototyping methodologies.",
  },
  {
    id: 4,
    description:
      "UX Design Certification - Completed intensive program covering user research, interaction design, and prototyping methodologies.",
  },
  {
    id: 5,
    description:
      "UX Design Certification - Completed intensive program covering user research, interaction design, and prototyping methodologies.",
  },
];
