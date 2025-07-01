import { motion } from "motion/react";
import SectionWrapperContainer from "../HOC/SectionWrapperContainer";
import HeadingWrapper from "../HOC/HeadingWrapper";
import { aboutText } from "@/constants/constants";

const About = () => {
    return (
        <SectionWrapperContainer>
            <figure className="max-h-[2100px] md:text-left max-w-full mx-auto overflow-y-hidden inner-wrapper-container">
                <HeadingWrapper>About</HeadingWrapper>
                    <motion.p
                        initial={{
                            y: 100,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1.2,
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex w-full text-left paragraph-1 flex-grow min-h-full"
                    >
                        {aboutText}
                        </motion.p>
            </figure>
        </SectionWrapperContainer>
    );
};

export default About;
