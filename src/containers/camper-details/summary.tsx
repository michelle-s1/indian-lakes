import {ICamper} from "@utils/types";
import CamperInfo from "@components/widgets/camper-info-widget";
import HTMLContent from "@components/html-content";

type TProps = Pick<
    ICamper,
    | "price"
    | "lot"
    | "title"
    | "sleeps"
    | "make"
    | "model"
    | "body"
    | "year"
    | "sleeps"
    | "length"
    | "thumbnail"
    | "seller"
>;

const Summary = ({
   price,
   make,
   model,
   year,
   sleeps,
   length,
   thumbnail,
   title,
   seller,
   body
}: TProps) => {
    return (
        <article className="tw-py-15 md:tw-py-20 lg:tw-py-[100px]">
            <div className="tw-container tw-border-b tw-border-b-gray-650 tw-pb-[50px] md:tw-pb-[70px] lg:tw-pb-[90px]">
                <h2 className="tw-text-4xl md:tw-text-[42px] lg:tw-text-5xl tw-text-center tw-mb-5">
                    {title}
                </h2>
                <div className="tw-grid tw-grid-cols-3 tw-gap-10 tw-mb-10 lg:tw-mb-[50px]">
                    <div className="tw-col-span-full lg:tw-col-[1/3]">
                        <div className="tw-h-[400px] lg:tw-h-[390px]">
                        <HTMLContent body={body} />

                        </div>

                        
                    </div>
                    <div className="tw-col-span-full lg:tw-col-[3/-1]">
                        <CamperInfo

                            title={title}
                            thumbnail={thumbnail}
                            price={price} 
                        make={make} model={model} year={year} sleeps={sleeps} length={length} seller={seller}                        />
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Summary;
