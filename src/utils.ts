export const POLY_SUB_TYPES = {
  POLYANET: {},
} as const;

export const COMETH_SUB_TYPES = {
  UP_COMETH: {
    direction: "up",
  },
  RIGHT_COMETH: {
    direction: "right",
  },
  DOWN_COMETH: {
    direction: "down",
  },
  LEFT_COMETH: {
    direction: "left",
  },
} as const;

export const SOLOON_SUB_TYPES = {
  BLUE_SOLOON: {
    color: "blue",
  },
  PURPLE_SOLOON: {
    color: "purple",
  },
  RED_SOLOON: {
    color: "red",
  },
  WHITE_SOLOON: {
    color: "white",
  },
} as const;

export const ASTRO_TYPES = {
  ...POLY_SUB_TYPES,
  ...COMETH_SUB_TYPES,
  ...SOLOON_SUB_TYPES,
} as const;
