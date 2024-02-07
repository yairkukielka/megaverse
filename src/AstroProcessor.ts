import { AstroCell, ComethCell, PolyanetCell, SoloonCell } from "./Astros";
import type {
  GoalCell,
  TAstroSubTypes,
  TComethSubtypes,
  TPolyanetSubtypes,
  TSoloonSubtypes,
} from "./types";
import { COMETH_SUB_TYPES, POLY_SUB_TYPES, SOLOON_SUB_TYPES } from "./utils";

/**
 * Converts the input goal cells to astro cells, that are more manageable objects
 * @param goalCells input goal cells
 * @returns AstroCell[]
 */
export const processMapCells = (goalCells: GoalCell[]): AstroCell[] => {
  return goalCells.map((cell) => createAstroCell(cell));
};

/**
 * Creates an astro cell from a input goal cell
 * @param cell input goal cell
 * @returns AstroCell
 */
function createAstroCell(cell: GoalCell): AstroCell {
  if (isPolyanetAstro(cell.astroType)) {
    return new PolyanetCell(cell.row, cell.column);
  } else if (isComethAstro(cell.astroType)) {
    return new ComethCell(
      cell.row,
      cell.column,
      COMETH_SUB_TYPES[cell.astroType].direction
    );
  } else if (isSoloonAstro(cell.astroType)) {
    return new SoloonCell(
      cell.row,
      cell.column,
      SOLOON_SUB_TYPES[cell.astroType].color
    );
  } else {
    throw Error("Astro type unknown while creating astrocells");
  }
}

const isPolyanetAstro = (value: TAstroSubTypes): value is TPolyanetSubtypes => {
  if (POLY_SUB_TYPES[value as TPolyanetSubtypes]) {
    return true;
  }
  return false;
};

const isComethAstro = (value: TAstroSubTypes): value is TComethSubtypes => {
  if (COMETH_SUB_TYPES[value as TComethSubtypes]) {
    return true;
  }
  return false;
};

const isSoloonAstro = (value: TAstroSubTypes): value is TSoloonSubtypes => {
  if (SOLOON_SUB_TYPES[value as TSoloonSubtypes]) {
    return true;
  }
  return false;
};
