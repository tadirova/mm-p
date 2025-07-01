import {motion} from "framer-motion";
import SectionWrapperContainer from "../HOC/SectionWrapperContainer";
import HeadingWrapper from "../HOC/HeadingWrapper";
import ScrollAreaHorizontalDemo from "./HorizScroll";

const Art = () => {
    return (
        <SectionWrapperContainer>
            <figure className="max-h-[2100px] md:text-left max-w-full mx-auto min-h-[30rem] overflow-y inner-wrapper-container space-y-16">
                <HeadingWrapper>Art</HeadingWrapper>
                <div className="flex flex-col xl:flex-row relative mx-auto items-stretch md:space-y-0 space-x-8 w-full max-w-full overflow-hidden">
                    <motion.span
                        initial={{
                            x: -200,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1.2,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="w-full max-w-full overflow-hidden"
                    >
                        <ScrollAreaHorizontalDemo />
                    </motion.span>
                    <motion.span
                        initial={{
                            x: 200,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1.2,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex w-full xl:w-1/2 text-left paragraph-1 flex-grow min-h-full"
                    >

                        The first time I saw a grand piano, I knew music would shape my life. Piano lessons and music theory soon opened up a new way of hearing the world, even a knock on the door carried new meaning.
                        By the age of nine, I was composing, and performing on stage helped me overcome a deep fear of being seen. My passion grew into exploring how sound can be made more tangible, especially through projects with people with disabilities, including an Erasmus+ experience in Portugal. In recent years, my journey led me to DJing - a space where music becomes collective, physical, and raw.
                        Performing across multiple cities, I’ve embraced new sounds, technologies, and the thrill of connecting people through rhythm.

                    </motion.span>
                </div>
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
                        I am constantly amazed by the beauty and complexity of the world around me, and creating art allows me to capture that beauty and share it with others. For me, there is nothing more rewarding than creating something that brings joy and inspiration to me and everyone around me.
                        The process of creating something from nothing, using only my imagination and the tools at hand is deeply satisfying and peaceful.
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
                        <ScrollAreaHorizontalDemo />
                    </motion.span>
                </div>
                <div className="flex flex-col md:flex-row relative items-stretch inner-section-wrapper-fixer md:space-y-0 md:space-x-8">
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
                        <ScrollAreaHorizontalDemo />
                    </motion.span>
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
                        I’ve been dancing for about 14 years, and I’m still a proud member of the same dance team, “Gazeli,” that I joined at the beginning of my journey. Through dance, I discovered how to hold myself on stage and build genuine confidence.
                        This art form has brought me lifelong friendships and unforgettable experiences. With my team, I’ve had the chance to travel and compete in places like Italy, Turkey, and Serbia, as well as in numerous competitions at home.
                        These travels expanded my horizons—introducing me to diverse cultures, traditions, and landmarks. Dance has given me a profound sense of freedom and proven that when you pursue what you love, the rewards are limitless.

                    </motion.p>
                </div>
            </figure>
        </SectionWrapperContainer>
    );
};

export default Art;
