"use strict";

const Entry = require("./entry");

/**
 * Cache class manages a data store for key:value pairs.
 *
 * @class Cache
 */
class Cache {
  dataStore = new Map();
  hits = 0;
  misses = 0;

  /**
   * #keyToString takes a key and converts it to a string
   * but rejects unaccepted key types.
   *
   * @param {*} key
   * @returns {(string|object)} qualified key string or object with error message.
   * @memberof Cache
   */
  #keyToString = (key) => {
    // private method
    try {
      const keyType = typeof key;
      let qualifiedKey = "";

      switch (keyType) {
        case "object":
        case "function":
        case "boolean":
        case "undefined":
          return false;
        case "number":
          qualifiedKey = key.toString();
          break;
        default:
          qualifiedKey = key.toString();
          break;
      } // switch

      return qualifiedKey;
    } catch (error) {
      console.log(error.message);
      return { message: `Error: ${error.message}` };
    }
  } // #keyToString

  /**
   * setItem receives a key and value and creates an entry of
   * the key:value pair in the data store.
   *
   * @param {*} key
   * @param {*} value
   * @returns {object} either Map object on success or object
   * with error message on failure.
   */
  setItem = (key, value) => {
    try {
      const qualifiedKey = this.#keyToString(key);
      const entry = new Entry(qualifiedKey, value);
      return this.dataStore.set(qualifiedKey, entry);
    } catch (error) {
      console.log(error.message);
      return { message: `Error: ${error.message}` };
    }
  };

  /**
   * getItem takes a key input and returns its corresponding 
   * value.
   *
   * @param {*} key
   * @returns {(any|undefined)} the corresponding value of the 
   * provided key or undefined if key isn't found.
   */
  getItem = (key) => {
    try {
      const qualifiedKey = this.#keyToString(key);
      const item = this.dataStore.get(qualifiedKey);
      if (item === undefined || item === null) {
        this.misses++;
      } else {
        this.hits++
      }
      return item;
    } catch (error) {
      console.log(error.message);
      return { message: `Error: ${error.message}` };
    }
  };

  /**
   * deleteItem takes a key and deletes it from the data store.
   *
   * @param {*} key
   * @returns {boolean} true if key existed and has been 
   * deleted or false if key didn't exist.
   */
  deleteItem = (key) => {
    try{
      const qualifiedKey = this.#keyToString(key);
      return this.dataStore.delete(qualifiedKey);
    } catch (error) {
      console.log(error.message);
      return { message: `Error: ${error.message}` };
    }
  };

  /**
   * getKeys fetches all keys in the data store.
   *
   * @returns {object} an iterable oject.
   */
  getKeys = () => {
    try{
      return this.dataStore.keys();
    } catch (error) {
      console.log(error.message);
      return { message: `Error: ${error.message}` };
    }
  };

  /**
   * getValues fetches all values in the data store.
   *
   * @returns {object} an iterable oject.
   */
  getValues = () => {
    try{
      return this.dataStore.values();
    } catch (error) {
      console.log(error.message);
      return { message: `Error: ${error.message}` };
    }
  };

  /**
   * getEntries fetches all entries in the data store. 
   *
   * @returns {object} an iterable oject with key:value pairs.
   */
  getEntries = () => {
    try{
      return this.dataStore.entries();
    } catch (error) {
      console.log(error.message);
      return { message: `Error: ${error.message}` };
    }
  };

  /**
   * getSize finds the number of items in the data store.
   *
   * @returns {number} an integer of number of items in the 
   * data store.
   */
  getSize = () => {
    try{
      return this.dataStore.size;
    } catch (error) {
      console.log(error.message);
      return { message: `Error: ${error.message}` };
    }
  };

  /**
   * getStats generates the cache's statistics.
   *
   * @returns {object} object with the stats in key:value pairs.
   */
  getStats = () => {
    try{
      const stats = {
        "numberOfItems": this.dataStore.size,
        "hits": this.hits,
        "misses": this.misses,
      };
  
      return stats;
    } catch (error) {
      console.log(error.message);
      return { message: `Error: ${error.message}` };
    }
  };

  /**
   * clearAll deletes everything in the data store.
   *
   * @returns {undefined}
   */
  clearAll = () => {
    try{
      return this.dataStore.clear();
    } catch (error) {
      console.log(error.message);
      return { message: `Error: ${error.message}` };
    }
  };
} // Cache

module.exports = Cache;
