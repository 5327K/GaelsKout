import axios from "axios";
import * as cheerio from "cheerio";

const scrapeMoreEventInfo = async (
  sku: string,
  programName: string
): Promise<Record<string, string> | null> => {
  try {
    const html = await axios.get(
      `https://www.robotevents.com/robot-competitions/${programName
        .toLowerCase()
        .replace(/ /g, "-")}/${sku}.html`
    );

    const $ = cheerio.load(html.data);

    return $("#api-app .row")
      .eq(1)
      .find(".col-sm-4")
      .toArray()
      .reduce(
        (o, val) => ({ ...o, [$(val).text()]: $(val).next().text() }),
        {}
      );
  } catch (e) {
    console.error(e);
    return null;
  }
};

export default scrapeMoreEventInfo;
