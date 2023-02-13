import Button from "@ui/button";
import SocialShare from "@components/social-share/layout-02";
import { ICamper } from "@utils/types";
import WidgetBox from "./widget-box";
import InfoPrice from "./info-price";
import InfoItem from "./info-item";
import WidgetTitle from "./widget-title";

type TProps = Pick<
    ICamper,
    | "price"
    | "title"
    | "make"
    | "model"
    | "year"
    | "sleeps"
    | "length"
    | "thumbnail"
    | "seller"
>;

const CamperInfo = ({
    price,
    make,
    sleeps,
    title,
    model,
    year,
    length,
    seller
}: TProps) => {
    return (
        <>
            <WidgetBox>
                <WidgetTitle>{title}</WidgetTitle>
                <InfoPrice title="Cost" price={price} currency="$" />
                <InfoItem
                    icon="far fa-user-friends"
                    label="make:"
                    value={make}
                />
                <InfoItem
                    icon="far fa-lock-alt"
                    label="Model:"
                    value={model}
                />
                  <InfoItem
                    icon="far fa-lock-alt"
                    label="Length:"
                    value={length}
                />
                <InfoItem
                    icon="far fa-lock-alt"
                    label="Sleeps:"
                    value={sleeps}
                />
                <InfoItem
                    icon="far fa-lock-alt"
                    label="Year:"
                    value={year}
                />
                    <Button
                        fullwidth
                        className="tw-mt-5"
                        path={seller}
                    >
                        Contact Seller
                    </Button>
                

                <SocialShare className="tw-mt-7 tw-justify-center" />
            </WidgetBox>
           
        </>
    );
};



export default CamperInfo;
