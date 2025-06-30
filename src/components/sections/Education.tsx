import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapperContainer from "../HOC/SectionWrapperContainer";
import HeadingWrapper from "../HOC/HeadingWrapper";
import Ed from "./Ed";
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
                    My educational journey has provided me with a strong foundation in both technical and design disciplines. Each qualification represents not just academic achievement, but practical skills I've applied in real-world projects.
                </motion.p>

                <div className="flex flex-col md:flex-row gap-8">
                    <motion.div 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2"
                    >
                        <Ed />
                    </motion.div>
                    
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2 space-y-52 mt-80"
                    >
                        {educationData.map((item) => (
                            <motion.div
                                key={item.id}
                                whileHover={{ scale: 1.02 }}
                                className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg"
                            >
                                <h3 className="text-xl font-semibold mb-3">Education Milestone #{item.id}</h3>
                                <p className="text-gray-300">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                
                
            </figure>
        </SectionWrapperContainer>
    );
};

export default Education;