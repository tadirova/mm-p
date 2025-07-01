import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapperContainer from "../HOC/SectionWrapperContainer";
import HeadingWrapper from "../HOC/HeadingWrapper";

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
                        className="md:w-1/2 text-left paragraph-1 flex-grow min-h-full"
                    >
                        Despite how unpredictable the future might be, I’m certain that I want to make an impact by connecting people or communities through technology even if it means brightening just one person’s path.
                        My journey into software engineering was sparked by my early love for music. What began as a simple appreciation for melody eventually turned into a fascination with the patterns that govern both music and computation.
                        My passion grew as I began programming in C++ and exploring algorithmic thinking through pattern recognition. Coming from a developing country, I’ve become especially interested in emerging fields like Quantum Computing.
                        This inspired me to focus my thesis on it, not only outlining its major challenges but also conducting research on Quantum Computer Music using tools like Max for Live, Qutune, Qiskit, and Python.
                        I believe that by bridging computing and music, we can open unexpected doors to solving complex problems artistically, socially, and technologically.
                    </motion.p>
                    <motion.span
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
                    </motion.span>
                </div>
            </figure>
        </SectionWrapperContainer>
    );
};

export default Career;
