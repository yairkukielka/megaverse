import { test, expect, describe } from "bun:test";
import { AstroCell } from "./Astros";
import type { GoalCell } from "./types";
import { processMapCells } from "./AstroProcessor";

describe("AstroProcessor", () => {
  test("processMapCells transforms input data successfully", async () => {
    const soloon: GoalCell = {
      row: 0,
      column: 0,
      astroType: "BLUE_SOLOON",
    };
    const cometh: GoalCell = {
      row: 0,
      column: 1,
      astroType: "DOWN_COMETH",
    };
    const result: AstroCell[] = processMapCells([soloon, cometh]);
    expect(result[0].row).toBe(0);
    expect(result[0].column).toBe(0);
    expect(result[1].row).toBe(0);
    expect(result[1].column).toBe(1);
  });
});
