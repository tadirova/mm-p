import { NavItem } from "../components/Hero/heroTypes";

export const navItems: NavItem[] = [
  { navBarTitle: "About", idLink: "#about" },
  { navBarTitle: "Education", idLink: "#education" },
  { navBarTitle: "Art", idLink: "#art" },
  { navBarTitle: "Career", idLink: "#career" },
  { navBarTitle: "Contact", idLink: "#contact" },
] as const;

export const bg = "bg-[#05142b]/90";

export const aboutText = `Where does it come from?
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    `;

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
