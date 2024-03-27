import NodeCache from "node-cache";

const cache = new NodeCache();

// cache.set("test", "hello");

console.log(cache.get("test"));
