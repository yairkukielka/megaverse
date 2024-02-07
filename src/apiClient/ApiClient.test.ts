import { test, expect, mock, describe, afterEach } from "bun:test";
import { getGoal } from "./ApiClient";

type fetchType = typeof global.fetch;

const shortMockGoal = {
  goal: [
    ["SPACE", "POLYANET"],
    ["SPACE", "POLYANET"],
  ],
};

const originalFetch = global.fetch;


const mockFetchWithSuccess = (result: any) => {
  global.fetch = mock(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(result),
    })
  ) as unknown as fetchType;
};

const mockFetchWithError = () => {
  global.fetch = mock(() =>
    Promise.resolve({
      ok: false,
      statusText: "this is an error",
    })
  ) as unknown as fetchType;
};

const mockFetchWithNetworkError = () => {
  global.fetch = mock(() => Promise.reject(new Error("this is an error")));
};

describe("ApiClient", () => {
  afterEach(() => {
    global.fetch = originalFetch;
  });

  test("getGoal returns matrix under goal property", async () => {
    mockFetchWithSuccess(shortMockGoal);
    const result = await getGoal();
    expect(result[0][0]).toBe("SPACE");
    expect(result[0][1]).toBe("POLYANET");
  });

  test("getGoal errors with non network error", async () => {
    mockFetchWithError();
    expect(async () => getGoal()).toThrow();
  });

  test("getGoal errors with network error", async () => {
    mockFetchWithNetworkError();
    expect(async () => getGoal()).toThrow();
  });
});
