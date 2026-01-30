import lume from "lume/mod.ts";
import top from "top/mod.ts";

const site = lume({
  server: {
    hostname: "0.0.0.0",  // Required for Docker - bind to all interfaces
  },
});

site.use(top());

// Add the custom script.js to the build
site.add("script.js");

export default site;
