import type { Cell } from "../types";

interface GoalResult {
  goal: string[][];
}

/**
 * Returns the goal matrix from the megaverse API
 */
export const getGoal = async (): Promise<string[][]> => {
  const response = await fetch(Bun.env.ENDPOINT_MAP);
  if (!response.ok) {
    throw new Error(`Error fetching goal: ${response.statusText}`);
  }
  const goal = ((await response.json()) as GoalResult).goal as string[][]; // TODO: would be nice to veryfy with zod
  return goal;
};

const getOptions = ({ method, body }: { method: string; body: string }) => ({
  method,
  headers: {
    "Content-Type": "application/json",
  },
  body,
});

/**
 * Makes the network call with a fetch
 * @param endpoint megaverse endpoint (url)
 * @param options fetch options
 */
const makeNetworkCall = async (
  endpoint: string,
  options: { method: string; body: string }
): Promise<void> => {
  const response = await fetch(endpoint, options);
  if (!response.ok) {
    throw new Error(`Error makeing network call: ${response.statusText}`);
  }
};

/**
 * Updates a megaverse cell with an http action
 * @param cell the AstroCell object to update
 * @param method supported methods are POST and DELETE
 */
export const updateCell = async (
  cell: Cell,
  endpoint: string,
  method: string
): Promise<void> => {
  const body = JSON.stringify({ ...cell, candidateId: Bun.env.CANDIDATE_ID });
  console.log("updating", endpoint, cell);
  await makeNetworkCall(endpoint, getOptions({ method, body }));
};
