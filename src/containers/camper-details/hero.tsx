import { IEvent } from "@utils/types";


type TProps = Pick<IEvent, "thumbnail" | "title" | "price" >;

const HeroSection = ({ thumbnail, title, price }: TProps) => {
    return (
        <div className="tw-relative tw-bg-heading tw-py-[100px] md:tw-pt-[232px] md:tw-pb-[184px] tw-max-h-[760px]">
            <div className="tw-absolute tw-inset-0 after:tw-absolute after:tw-content-[''] after:tw-inset-0 after:tw-bg-black/40">
                {thumbnail?.src && (
                    <img
                        className="tw-w-full tw-h-full tw-object-cover"
                        src={thumbnail.src}
                        alt={thumbnail?.alt || title}
                        width="1920"
                    />
                )}
            </div>

            <div className="tw-container tw-relative tw-z-1 tw-text-white tw-text-center">
                <p className="tw-font-bold tw-uppercase tw-tracking-[2px] tw-mb-7">
                    ${price}
                </p>

                <h1 className="tw-text-[40px] md:tw-text-5xl lg:tw-text-[56px] tw-leading-[1.15] tw-text-white tw-mb-0">
                    {title}
                </h1>
               
            </div>
        </div>
    );
};

export default HeroSection;
