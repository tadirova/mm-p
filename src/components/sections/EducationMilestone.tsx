import { motion } from "framer-motion";
import {MilestoneProps} from "@/components/sections/typings";

const EducationMilestone = ({ id, title, description }: MilestoneProps) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            key={id}
            className="flex flex-col relative w-full xl:w-1/2 p-6 mb-[-22.5rem] bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg"
        >
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </motion.div>
    );
};

export default EducationMilestone;