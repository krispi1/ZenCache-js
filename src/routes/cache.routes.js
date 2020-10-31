const router = require("express").Router();

// CC --> CacheControllers
const CC = require("../controllers/cache.controllers");

// add, fetch, remove
router.post("/", CC.createEntry);
router.get("/", CC.fetchData);
router.delete("/del/:key", CC.deleteData);

/*extra routes*/
// keys, values, entries, size, clear, stats
router.get("/keys", CC.getKeys);
router.get("/values", CC.getValues);
router.get("/entries", CC.getEntries);
router.get("/size", CC.getSize);
router.get("/stats", CC.getStats);
router.delete("/clear", CC.clearAll);

module.exports = router;
