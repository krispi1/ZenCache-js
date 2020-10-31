"use strict";

const Cache = require("./cache");
const Entry = require("../classes/entry");

jest.mock("../classes/entry");

describe("Cache class", () => {
  const cache = new Cache();

  test("Cache class instance properties", () => {
    expect(cache).toBeInstanceOf(Cache);

    expect(cache).toHaveProperty("setItem");
    expect(cache).toHaveProperty("getItem");
    expect(cache).toHaveProperty("deleteItem");
    expect(cache).toHaveProperty("getKeys");
    expect(cache).toHaveProperty("getValues");
    expect(cache).toHaveProperty("getEntries");
    expect(cache).toHaveProperty("getSize");
    expect(cache).toHaveProperty("getStats");
    expect(cache).toHaveProperty("clearAll");
  });

  test("Cache instance properties and their operations", () => {
    const setItem = cache.setItem("language", "JavaScript");

    expect(Entry).toHaveBeenCalledTimes(1);
    expect(typeof cache.dataStore).toBe("object");

    expect(typeof setItem).toBe("object");
    expect(typeof cache.getItem("language")).toBe("object");
    expect(typeof cache.deleteItem("language")).toBe("boolean");
    expect(typeof cache.getKeys()).toBe("object");
    expect(typeof cache.getValues()).toBe("object");
    expect(typeof cache.getEntries()).toBe("object");
    expect(typeof cache.getSize()).toBe("number");
    expect(typeof cache.getStats()).toBe("object");
    expect(typeof cache.clearAll()).toBe("undefined");
  });
});
