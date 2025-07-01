import { motion } from "framer-motion";
import SectionWrapperContainer from "../HOC/SectionWrapperContainer";
import HeadingWrapper from "../HOC/HeadingWrapper";
import CombinedEducation from "./CombinedEducation";
import { educationData } from "@/constants/constants";

const Education = () => {
    return (
        <SectionWrapperContainer>
            <figure className="max-h-[2300px] md:text-left max-w-full mx-auto min-h-[30rem] overflow-y inner-wrapper-container">
                <HeadingWrapper>Education</HeadingWrapper>

                <motion.p
                    initial={{ x: 200, opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="mt-12 md:w-full text-left paragraph-1 flex-grow min-h-full"
                >
                    I study Software Engineering and Information Systems at the Faculty of
                    Computer Science and Engineering (FINKI) in Skopje, Macedonia. My
                    academic path is rooted in a long-standing curiosity about how things
                    work beneath the surface - particularly in the intersection between
                    creativity and logic. In high school, I gravitated toward subjects
                    related to computing, which naturally led me to develop a final-year
                    project focused on algorithmic music and the relationship between sound
                    and code. The most compelling areas of study for me involve algorithms,
                    artificial intelligence, and systems design - fields where structured
                    logic meets creative problem-solving.
                </motion.p>

                <CombinedEducation educationData={educationData} />
            </figure>
        </SectionWrapperContainer>
    );
};

export default Education;