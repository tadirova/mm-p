import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapperContainer from "../HOC/SectionWrapperContainer";
import HeadingWrapper from "../HOC/HeadingWrapper";
import {careerText} from "@/constants/constants";
import * as React from "react";

const Career = () => {
    return (
        <SectionWrapperContainer>
            <figure className="max-h-[2100px] md:text-left max-w-full mx-auto min-h-[30rem] overflow-y inner-wrapper-container">
                <HeadingWrapper>Career</HeadingWrapper>
                <div className="flex flex-col md:flex-row relative items-stretch inner-section-wrapper-fixer md:space-y-0 md:space-x-8">
                    <motion.p
                        initial={{
                            x: 200,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1.2,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/2 text-left paragraph-1 flex-grow min-h-full"
                    >{careerText}</motion.p>
                    <motion.span
                        initial={{
                            x: -200,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1.2,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex md:w-1/2"
                    >
                        <Image
                            className="rounded-xl aspect-[4/3] h-fit w-fit object-cover md:rounded-xl"
                            src={"/down_artfull.webp"}
                            alt={"Hero Portfolio"}
                            width={700}
                            height={400}
                            priority
                        />
                    </motion.span>
                </div>
            </figure>
        </SectionWrapperContainer>
    );
};

export default Career;
