import lume from "lume/mod.ts";
import lumocs from "lumocs/mod.ts";
import relativeUrls from "lume/plugins/relative_urls.ts";


const site = lume({
  src: "src",
  location: new URL("https://lgmsar.org"),
});


site.use(relativeUrls());
site.add("/files/");
site.use(lumocs());

export default site;
