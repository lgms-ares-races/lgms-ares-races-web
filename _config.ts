import lume from "lume/mod.ts";
import lumocs from "lumocs/mod.ts";
import relativeUrls from "lume/plugins/relative_urls.ts";

//const siteUrl = "https://url.of.site";

const site = lume({
  src: "src",
//  location: new URL(siteUrl),
});


site.use(relativeUrls());
site.add("/files/");
site.use(lumocs());

export default site;
