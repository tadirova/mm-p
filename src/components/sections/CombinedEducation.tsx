import {motion} from "framer-motion";
import EducationCard from "./EducationCard";
import EducationMilestone from "./EducationMilestone";
import {CombinedEducationProps} from "@/components/sections/typings";

const CombinedEducation = ({educationData}: CombinedEducationProps) => {
    return (
        <div className="flex flex-col gap-4 overflow-hidden">
                {educationData.map((item, index) => (
                    <motion.div
                        key={`card-${item.id}`}
                        initial={{x: -100, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{duration: 1.2}}
                        viewport={{ once: true }}
                        className='w-full flex flex-col xl:flex-row relative mx-auto items-center justify-center gap-4'
                    >
                        <EducationCard
                            emoji={item.emoji}
                            hueA={item.hueA}
                            hueB={item.hueB}
                            index={index}
                        />
                        <EducationMilestone
                            id={item.id}
                            title={item.title}
                            description={item.description}
                        />
                    </motion.div>
                ))}
        </div>
    );
};

export default CombinedEducation;