import Image from "next/image";
import { motion } from "motion/react";
import SectionWrapperContainer from "../HOC/SectionWrapperContainer";
import HeadingWrapper from "../HOC/HeadingWrapper";
import { aboutText } from "@/constants/constants";

const About = () => {
    return (
        <SectionWrapperContainer>
            <figure className="max-h-[2100px] md:text-left max-w-full mx-auto min-h-[20rem] overflow-y inner-wrapper-container">
                <HeadingWrapper>About</HeadingWrapper>
                <div className="flex flex-col md:flex-row relative items-stretch inner-section-wrapper-fixer md:space-y-0 md:space-x-8">
                    {/* <motion.span
                        initial={{
                            x: -200,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1.2,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex md:w-1/2"
                    >
                        <Image
                            className="rounded-xl object-cover md:rounded-xl"
                            src={"/hero-portfolio.jpg"}
                            alt={"Hero Portfolio"}
                            width={700}
                            height={400}
                            priority
                        />
                    </motion.span> */}
                    <motion.p
                        initial={{
                            y: 200,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1.2,
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="md:w-1/2 text-left paragraph-1 flex-grow min-h-full"
                    >
                        {aboutText}
                        </motion.p>
                </div>
            </figure>
        </SectionWrapperContainer>
    );
};

export default About;
