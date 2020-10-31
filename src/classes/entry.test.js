"use strict";

const Entry = require("./entry");

describe("Entry class", () => {
  const entry = new Entry("test", "jest");

  test("Entry class instance", () => {
    expect(entry).toBeInstanceOf(Entry);

    expect(entry.key).toBe("test");
    expect(entry.value).toBe("jest");
    expect(entry.ttl).toEqual(2628000000);

    expect(entry).toHaveProperty("key");
    expect(entry).toHaveProperty("value");
    expect(entry).toHaveProperty("ttl");
    expect(entry).toHaveProperty("createdAt");
  });

  test("Entry class property types", () => {
    expect(typeof entry.key).toBe("string");
    expect(typeof entry.ttl).toBe("number");
    expect(typeof entry.createdAt).toBe("number");
  });
});
