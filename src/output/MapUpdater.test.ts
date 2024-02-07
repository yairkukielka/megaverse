import { test, expect, mock, describe } from "bun:test";
import { HTTP_ACTIONS, updateMegaverse } from "./MapUpdater";
import { PolyanetCell } from "../Astros";

describe("MapUpdater", () => {
  let updateCellCallCounter = 0; // in Bun spying on a mocked module method doesn't work. So this is a workaround
  mock.module("../apiClient/ApiClient", () => {
    return {
      updateCell: () => {
        updateCellCallCounter++;
        Promise.resolve();
      },
    };
  });

  test("updateMegaverse makes calls for every cell", async () => {
    const poly1 = new PolyanetCell(0, 1);
    const poly2 = new PolyanetCell(1, 1);
    await updateMegaverse([poly1, poly2], HTTP_ACTIONS.POST);
    expect(updateCellCallCounter).toBe(2);
  });
});
