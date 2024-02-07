import { updateCell } from "../apiClient/ApiClient";
import {
  PolyanetCell,
  type AstroCell,
  ComethCell,
  SoloonCell,
} from "../Astros";

export enum HTTP_ACTIONS {
  POST = "POST",
  DELETE = "DELETE",
}

const TIME_BETWEEN_CALLS = Bun.env.THROTTLE_MILLIS_BETWEEN_CALLS;
const sleep = (millis: number) => new Promise((r) => setTimeout(r, millis));

function getEndpoint(astroCell: AstroCell): string {
  if (astroCell instanceof PolyanetCell) return Bun.env.ENDPOINT_POLYANETS;
  if (astroCell instanceof ComethCell) return Bun.env.ENDPOINT_COMETHS;
  if (astroCell instanceof SoloonCell) return Bun.env.ENDPOINT_SOLOONS;
  throw Error(`Can't find endpoint for unknown Astro`);
}

/**
 * Updates the Megaverse sending http requests to the API
 * @param astroCells astro cells to be sent to the Megaverse API
 * @param action one of HTTP_ACTIONS
 */
export const updateMegaverse = async (
  astroCells: AstroCell[],
  action: string
) => {
  for (let astroCell of astroCells) {
    await sleep(TIME_BETWEEN_CALLS); // throttle to prevent the 'Too Many Requests' Error
    await updateCell(astroCell.toCellObject(), getEndpoint(astroCell), action);
  }
};
