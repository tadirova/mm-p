import { motion } from "framer-motion";
import ScrollAreaHorizontalDemo from "@/components/sections/HorizScroll";
import {ArtArticleProps} from "@/components/sections/typings";

const ArtArticle = ({ art, className = "" }: ArtArticleProps) => {
    return (
        <div className={`flex flex-col xl:flex-row relative mx-auto items-stretch md:space-y-0 space-x-8 w-full max-w-full overflow-hidden ${className}`}>
            <motion.span
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="w-full max-w-full overflow-hidden min-h-[32rem]"
            >
                <ScrollAreaHorizontalDemo items={art.artworks} />
            </motion.span>

            <motion.span
                initial={{ x: 200, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex w-full xl:w-1/2 text-left paragraph-1 flex-grow"
            >
                {art.content}
            </motion.span>
        </div>
    );
};

export default ArtArticle;