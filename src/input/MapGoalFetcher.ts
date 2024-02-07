import { getGoal } from "../apiClient/ApiClient";
import type { GoalCell, TAstroSubTypes } from "../types";
import { ASTRO_TYPES } from "../utils";

/**
 * Fetches the megaverse goal
 * @returns An array of non empty goal cells
 */
export const getMegaverseGoal = async () => {
  const goal = await getGoal();
  return transformGoalMatrixToKnownAstroCells(goal);
};

/**
 * Transforms the input from the goal matrix to an array of known goal cells. Empty spaces are ignored.
 * @param goalMatrix the megaverse goal
 * @returns An array of known astro cells
 */
const transformGoalMatrixToKnownAstroCells = (
  goalMatrix: string[][]
): GoalCell[] => {
  const result: GoalCell[] = [];
  for (let i = 0; i < goalMatrix.length; i++) {
    for (let j = 0; j < goalMatrix[i].length; j++) {
      const cellValue = goalMatrix[i][j];
      if (isKnownAstro(cellValue)) {
        result.push({ row: i, column: j, astroType: cellValue });
      }
    }
  }
  return result;
};

const isKnownAstro = (value: string): value is TAstroSubTypes => {
  if (ASTRO_TYPES[value as TAstroSubTypes]) {
    return true;
  }
  return false;
};
