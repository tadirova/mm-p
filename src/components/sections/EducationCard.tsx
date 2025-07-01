import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {CardProps} from "@/components/sections/typings";

const cardVariants: Variants = {
    offscreen: {
        y: 300,
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
            className={`card-container-${index} flex w-full xl:w-1/2 relative mx-auto`}
            style={{
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                paddingTop: 20,
                marginBottom: -120,
            }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
                    background,
                }}
            />
            <motion.div
                style={{
                    fontSize: 164,
                    width: 300,
                    height: 430,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 20,
                    background: "#f5f5f5",
                    boxShadow:
                        "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
                    transformOrigin: "10% 60%",
                }}
                variants={cardVariants}
                className="card"
            >
                {emoji}
            </motion.div>
        </motion.div>
    );
};

export default EducationCard;