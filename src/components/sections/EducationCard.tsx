import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { CardProps } from "@/components/sections/typings";

const cardVariants: Variants = {
    offscreen: {
        y: 200,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

const EducationCard = ({ emoji, hueA, hueB, index }: CardProps) => {
    const background = `linear-gradient(306deg, hsl(${hueA}, 100%, 50%), hsl(${hueB}, 100%, 50%))`;

    return (
        <motion.div
            key={index}
            className={`flex w-[100%] mx-auto xl:w-1/2 overflow-hidden justify-center items-center relative pt-5`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            {/* Background shape with clip-path */}
            <div
                className="absolute inset-0 left-[10%] md:left-[20%] lg:left-[25%] xl:left-0"
                style={{
                    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
                    background,
                }}
            />

            {/* Card with emoji */}
            <motion.div
                className="flex justify-center items-center rounded-xl bg-gray-50 shadow-lg ml-10 lg:ml-0 w-[300px] h-[430px] text-[164px] transform-origin-[10%_60%]"
                variants={cardVariants}
            >
                {emoji}
            </motion.div>
        </motion.div>
    );
};

export default EducationCard;