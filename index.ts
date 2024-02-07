import { processMapCells } from "./src/AstroProcessor";
import type { AstroCell } from "./src/Astros";
import { getMegaverseGoal } from "./src/input/MapGoalFetcher";
import { HTTP_ACTIONS, updateMegaverse } from "./src/output/MapUpdater";
import type { GoalCell } from "./src/types";

declare module "bun" {
  interface Env {
    ENDPOINT_MAP: string;
    ENDPOINT_POLYANETS: string;
    ENDPOINT_COMETHS: string;
    ENDPOINT_SOLOONS: string;
    CANDIDATE_ID: string;
    THROTTLE_MILLIS_BETWEEN_CALLS: number;
  }
}

if (
  !Bun.env.ENDPOINT_MAP ||
  !Bun.env.ENDPOINT_COMETHS ||
  !Bun.env.ENDPOINT_SOLOONS ||
  !Bun.env.ENDPOINT_POLYANETS ||
  !Bun.env.CANDIDATE_ID ||
  !Bun.env.THROTTLE_MILLIS_BETWEEN_CALLS
) {
  throw new Error(
    "Please check that all environment variables are supplied!\n Check out the README and the .env file."
  );
}

console.log("Starting the megaverse challenge!");
console.log("Fething goal...");
const goal: GoalCell[] = await getMegaverseGoal();
console.log("Processign astro cells...");
const astroCells: AstroCell[] = processMapCells(goal);
console.log("updating metaverse. It might take a while...");
await updateMegaverse(astroCells, HTTP_ACTIONS.POST); // could also pass DELETE to reset the map cells
console.log("Finished the megaverse challenge!");
