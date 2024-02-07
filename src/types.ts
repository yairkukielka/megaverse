import {
  ASTRO_TYPES,
  POLY_SUB_TYPES,
  COMETH_SUB_TYPES,
  SOLOON_SUB_TYPES,
} from "./utils";

export type TAstroSubTypes = keyof typeof ASTRO_TYPES; // "BLUE_SOLOON" | "PURPLE_SOLOON" | "RED_SOLOON" | "WHITE_SOLOON" | "UP_COMETH" | "RIGHT_COMETH" | "DOWN_COMETH" | "LEFT_COMETH" | "POLYANET"
export type TPolyanetSubtypes = keyof typeof POLY_SUB_TYPES; // "POLYANET"
export type TComethSubtypes = keyof typeof COMETH_SUB_TYPES; // "UP_COMETH" | "RIGHT_COMETH" | "DOWN_COMETH" | "LEFT_COMETH"
export type TSoloonSubtypes = keyof typeof SOLOON_SUB_TYPES; // "BLUE_SOLOON" | "PURPLE_SOLOON" | "RED_SOLOON" | "WHITE_SOLOON"

export type Cell = {
  row: number;
  column: number;
};
export type Cells = Cell[];

export type GoalCell = Cell & {
  astroType: TAstroSubTypes;
};

export interface IAstroCell extends Cell {
  toCellObject: () => Cell;
}
