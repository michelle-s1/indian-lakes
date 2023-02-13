import { motion } from "framer-motion";
import CamperCard from "@components/camper-card/camper-01";
import Pagination from "@components/pagination/pagination-01";
import { ICamper } from "@utils/types";
import { scrollUpVariants } from "@utils/variants";

const AnimatedCamperCard = motion(CamperCard);

type TProps = {
    data: {
    campers: ICamper[];
    pagiData?: {
        currentPage: number;
        numberOfPages: number;
    };
}
};

const OriginalItems = ({data: { campers, pagiData }}: TProps) => {
    return (
        <>
            <div className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-7.5">
                {campers.map((camper) => (
                    <AnimatedCamperCard
                        key={camper.path}
                        title={camper.title}
                        path={camper.path}
                        thumbnail={camper.thumbnail}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={scrollUpVariants} 
                        price={camper.price} 
                        lot={camper.lot}                    />
                ))}
            </div>
            {pagiData && pagiData.numberOfPages > 1 && (
                <Pagination
                    className="tw-mt-[50px]"
                    numberOfPages={pagiData.numberOfPages}
                    currentPage={pagiData.currentPage}
                    rootPage="campers"
                />
            )}
        </>
    );
};

export default OriginalItems;
