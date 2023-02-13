import type { GetStaticPaths, NextPage } from "next";
import SEO from "@components/seo/page-seo";
import Layout01 from "@layout/layout-01";
import HeroSection from "@containers/camper-details/hero";
import Comment from "@containers/camper-details/comment";
import { ICamper } from "@utils/types";
import { toCapitalize } from "@utils/methods";
import { getCampereBySlug, getallCampers } from "../../lib/camper";
import Summary from "@containers/camper-details/summary";

type TProps = {
    data: {
       camper: ICamper;
    };
};

type PageProps = NextPage<TProps> & {
    Layout: typeof Layout01;
};

const SingleCamper: PageProps = ({ data: { camper } }) => {
    return (
        <>
            <SEO
                title={toCapitalize(camper.title)}
                openGraph={{
                    type: "article",
                    images: [
                        {
                            url: `https://maxcoach-react.pages.dev${camper.thumbnail.src}`,
                            width: 800,
                            height: 600,
                            alt: camper.title,
                        },
                        {
                            url: `https://maxcoach-react.pages.dev${camper.thumbnail.src}`,
                            width: 900,
                            height: 800,
                            alt: camper.title,
                        },
                    ],
                }}
            />
            <HeroSection
                thumbnail={camper.thumbnail}
                title={camper.title}
                price={camper.price}
              
            />
            
            <Summary title={camper.title} body={camper.body} thumbnail={camper.thumbnail} sleeps={camper.sleeps} price={camper.price} lot={camper.lot} make={camper.make} model={camper.model} year={camper.year} seller={camper.seller} length={camper.length} />
            
            <Comment />
        </>
    );
};

SingleCamper.Layout = Layout01;

export const getStaticPaths: GetStaticPaths = () => {
    const campers = getallCampers(["slug"]);
    return {
        paths: campers.map((camper) => {
            return {
                params: {
                    slug: camper.slug,
                },
            };
        }),
        fallback: false,
    };
};

type Params = {
    params: {
        slug: string;
    };
};

export const getStaticProps = ({ params }: Params) => {
    const camper = getCampereBySlug(params.slug, "all");

    return {
        props: {
            data: {
                camper,
            },
            layout: {
                headerShadow: true,
                headerFluid: false,
                footerMode: "light",
            },
        },
    };
};

export default SingleCamper;
