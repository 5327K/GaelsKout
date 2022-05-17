import { Event, EventType } from "../api/Api";
import formatDate from "./formatDate";
import scrapeMoreEventInfo from "./scrapeMoreEventInfo";

const combineEventInfo = async (event: Event) => {
  let info = (await scrapeMoreEventInfo(event.sku, event.program.name)) || {};

  // different languages cause mayhem here, so only overwrite if we need to
  // warning: this data might be inaccurate as its scraped!
  if (info === {}) {
    info["Event Code"] = event.sku;
    info["Program"] = event.program.name;
  
    info["Date"] = `${
      event.start ? formatDate(new Date(event.start)) : "???"
    } - ${event.end ? formatDate(new Date(event.end)) : "???"}`;
  
    if (event.event_type) info["Event Type"] = event.event_type.toString();
    if (event.location.region) info["Event Region"] = event.location.region;
  }

  return info;
};

export default combineEventInfo;
