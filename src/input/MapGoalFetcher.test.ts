import { test, expect, mock, describe } from "bun:test";
import { getMegaverseGoal } from "./MapGoalFetcher";

const shortMockGoalMatrix = [["SPACE", "POLYANET"], ["SPACE", "POLYANET"]];

describe("MapGoalFetcher", () => {
  mock.module("../apiClient/ApiClient", () => {
    return {
      getGoal: () => Promise.resolve(shortMockGoalMatrix),
    };
  });

  test("getMegaverseGoal returns non empty cells", async () => {
    const result = await getMegaverseGoal();

    expect(result.length).toBe(2);

    expect(result[0].row).toBe(0);
    expect(result[0].column).toBe(1);
    expect(result[0].astroType).toBe("POLYANET");
  });
});
