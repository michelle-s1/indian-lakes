import fs from "fs";
import path from "path";
import { ICamper } from "@utils/types";
import { getSlugs } from "./util";

const directory = path.join(process.cwd(), "src/data/campers");

export function getCampereBySlug(
    slug: string,
    fields: Array<keyof ICamper> | "all"
): ICamper {
    const realSlug = slug.replace(/\.json$/, "");
    const fullPath = path.join(directory, `${realSlug}.json`);
    const fileContents = JSON.parse(
        fs.readFileSync(fullPath, "utf8")
    ) as ICamper;
    let camper: ICamper;
    if (fields === "all") {
        camper = fileContents;
    } else {
        camper = fields.reduce((acc: ICamper, field: keyof ICamper) => {
            if (field === "slug") {
                return { ...acc, [field]: realSlug };
            }
            if (typeof fileContents[field] !== "undefined") {
                return {
                    ...acc,
                    [field]: fileContents[field],
                };
            }
            return acc;
        }, <ICamper>{});
    }

    return { ...camper, path: `/campers/${realSlug}` };
}

export function getallCampers(
    fields: Array<keyof ICamper> | "all",
    skip = 0,
    limit?: number
) {
    const slugs = getSlugs(directory);
    let campers = slugs.map((slug) => getCampereBySlug(slug, fields));
    if (limit) campers = campers.slice(skip, limit);
    return campers;
}

export function getCamperMeta() {
    const slugs = getSlugs(directory);
    return { count: slugs.length };
}
