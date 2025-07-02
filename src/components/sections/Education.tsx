import { motion } from "framer-motion";
import SectionWrapperContainer from "../HOC/SectionWrapperContainer";
import HeadingWrapper from "../HOC/HeadingWrapper";
import CombinedEducation from "./CombinedEducation";
import {educationData, eduText} from "@/constants/constants";

const Education = () => {
    return (
        <SectionWrapperContainer>
            <figure className=" md:text-left max-w-full mx-auto overflow-y inner-wrapper-container">
                <HeadingWrapper>Education</HeadingWrapper>

                <motion.p
                    initial={{ x: 200, opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="md:w-full text-left paragraph-1 flex-grow min-h-full"
                >
                    {eduText}
                </motion.p>

                <CombinedEducation educationData={educationData} />
            </figure>
        </SectionWrapperContainer>
    );
};

export default Education;