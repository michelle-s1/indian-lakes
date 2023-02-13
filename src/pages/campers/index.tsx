import type { GetStaticProps, NextPage } from "next";
import SEO from "@components/seo/page-seo";
import Layout01 from "@layout/layout-01";
import Breadcrumb from "@components/breadcrumb";
import CamperArea from "@containers/camper/layout-01";
import { ICamper } from "@utils/types";
import { getallCampers, getCamperMeta } from "../../lib/camper";

type TProps = {
    data: {
        campers: ICamper[];
        allCampers: ICamper[];
        currentPage: number;
        numberOfPages: number;
        totalCampers: number;
    };
};

type PageProps = NextPage<TProps> & {
    Layout: typeof Layout01;
};

const POSTS_PER_PAGE = 9;

const Campers: PageProps = ({
    data: { campers, currentPage, numberOfPages },
}) => {
    return (
        <>
            <SEO title="Campers" />
            <Breadcrumb
                pages={[{ path: "/", label: "home" }]}
                currentPage="Campers"
            />
            <CamperArea
                data={{
                    campers,
                    pagiData: { currentPage, numberOfPages },
                }}
            />
        </>
    );
};

Campers.Layout = Layout01;

export const getStaticProps: GetStaticProps = () => {
    const campers = getallCampers([
        "slug",
        "title",
        "thumbnail",
        "price",
        "lot",
    ]);

    const { count } = getCamperMeta();
    return {
        props: {
            data: {
                campers: campers.slice(0, POSTS_PER_PAGE),
                allCampers: campers,
                totalCampers: count,
                currentPage: 1,
                numberOfPages: Math.ceil(count / POSTS_PER_PAGE),
            },
            layout: {
                headerShadow: true,
                headerFluid: false,
                footerMode: "light",
            },
        },
    };
};

export default Campers;
