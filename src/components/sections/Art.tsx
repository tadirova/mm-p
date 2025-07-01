import SectionWrapperContainer from "../HOC/SectionWrapperContainer";
import HeadingWrapper from "../HOC/HeadingWrapper";
import ArtArticle from "@/components/sections/ArtArticle";
import {fineArts, musicArts, danceArt} from "@/constants/constants";

const Art = () => {
    return (
        <SectionWrapperContainer>
            <figure className="max-h-[2100px] md:text-left max-w-full mx-auto overflow-y inner-wrapper-container">
                <HeadingWrapper>Art</HeadingWrapper>
                <ArtArticle
                    art={musicArts}
                />
                <ArtArticle
                    art={fineArts}
                />
                <ArtArticle
                    art={danceArt}
                />
            </figure>
        </SectionWrapperContainer>
    );
};

export default Art;
