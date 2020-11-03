"use strict";

const Cache = require("../classes/cache");

const CacheControllers = {};

const dataStore = new Cache();

/*************************required*************************/
// add, fetch, remove

/**
 * CacheControllers.createEntry inserts a new data item into
 * the data store as a key:value pair.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns {object} object with an operation report on success
 * or one with error message on failure.
 */
CacheControllers.createEntry = function (req, res, next) {
  // POST /cache/
  try {
    const keyValue = Object.entries(req.body)[0];
    const key = keyValue[0];
    const value = keyValue[1];
    const data = dataStore.setItem(key, value);
    if (data) {
      return res.status(200).json({ new_entry: [key, value] });
    } else {
      return res.status(409).json({ message: "Failed to create entry!" });
    }
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ error: `Something went wrong! ${error.message}` });
  }
}; // createEntry

/**
 * CacheControllers.fetchData fetches a specified data item.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns {object} object with key:value on success or one with
 * error message on failure.
 */
CacheControllers.fetchData = function (req, res, next) {
  // GET /cache/
  try {
    const { key } = req.body;
    const item = dataStore.getItem(key);
    return res.status(200).json({
      item: item ? item : null,
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ error: `Something went wrong! ${error.message}` });
  }
}; // fetchData

/**
 * CacheControllers.deleteData deletes a specified data item
 * from the data store.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns {object} object with an operation report on success
 * or one with error message on failure.
 */
CacheControllers.deleteData = function (req, res, next) {
  // DELETE /cache/del/:key
  try {
    const deleted = dataStore.deleteItem(req.params.key);
    if (deleted) {
      return res.status(200).json({ message: `${req.params.key} deleted!` });
    } else {
      return res
        .status(200)
        .json({ message: `${req.params.key} wasn't found!` });
    }
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ error: `Something went wrong! ${error.message}` });
  }
}; // deleteData

/************************end required************************/

/*extra operations*/
// keys, values, entries, size, stats, clear

/**
 * CacheControllers.getKeys fetches all keys from the data
 * store.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns {object} object with an array of keys on success
 * or one with error message on failure.
 */
CacheControllers.getKeys = function (req, res, next) {
  // GET /cache/keys
  try {
    const keys = dataStore.getKeys();
    return res.status(200).json({ keys: Array.from(keys) });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ error: `Something went wrong! ${error.message}` });
  }
}; // getKeys

/**
 * CacheControllers.getValues fetches all values from the data
 * store.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns {object} object with an array of values on
 * success or one with error message on failure.
 */
CacheControllers.getValues = function (req, res, next) {
  // GET /cache/values
  try {
    const values = dataStore.getValues();
    return res.status(200).json({ values: Array.from(values) });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ error: `Something went wrong! ${error.message}` });
  }
}; // getValues

/**
 * CacheControllers.getEntries fetches all entries in the data
 * store.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns {object} object with an array key:value arrays on
 * success or one with error message on failure.
 */
CacheControllers.getEntries = function (req, res, next) {
  // GET /cache/entries
  try {
    const entries = dataStore.getEntries();
    return res.status(200).json({ entries: Array.from(entries) });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ error: `Something went wrong! ${error.message}` });
  }
}; // getEntries

/**
 * CacheControllers.getSize gets the number of keys in the
 * data store.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns {object} object with size on success or one with
 * error on failure.
 */
CacheControllers.getSize = function (req, res, next) {
  // GET /cache/size
  try {
    return res.status(200).json({ size: dataStore.getSize() });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ error: `Something went wrong! ${error.message}` });
  }
}; // getSize

/**
 * CacheControllers.getStats fetches the data store statistics.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns {object} object with stats on success or one with
 * error on failure.
 */
CacheControllers.getStats = function (req, res, next) {
  // GET /cache/stats
  try {
    const stats = dataStore.getStats();
    return res.status(200).json({ stats: stats });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ error: `Something went wrong! ${error.message}` });
  }
}; // getStats

/**
 * CacheControllers.clearAll empties out the data store.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns {object} object with message on success or one
 * with error on failure.
 */
CacheControllers.clearAll = function (req, res, next) {
  // DELETE /cache/clear
  try {
    dataStore.clearAll();
    const size = dataStore.getSize();
    if (size === 0) {
      return res.status(200).json({ message: `Data cleared! size: ${size}` });
    } else {
      return res
        .status(409)
        .json({ message: `Data wasn't cleared! size: ${size}` });
    }
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ error: `Something went wrong! ${error.message}` });
  }
}; // clearAll

module.exports = CacheControllers;
