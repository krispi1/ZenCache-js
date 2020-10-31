// ttl --> time to live (in milliseconds).
// ttl 1 month (2,628,000,000 ms) by default.

/**
 * Entry instantiates the objects stored in the cache data store.
 *
 * @class Entry
 */
class Entry {
  constructor(key, value, ttl = 2628000000) { 
    this.key = key;
    this.value = value;
    this.ttl = ttl;
    this.createdAt = Date.now();
  }
} // Entry

module.exports = Entry;
