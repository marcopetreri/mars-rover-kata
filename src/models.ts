export interface Point {
  x: number;
  y: number;
}

export type Direction = "N" | "S" | "E" | "W";

export type TranslationCommands = "f" | "b";

export type RotationCommands = "l" | "r";

export type Movements = 1 | -1;

export type Commands = TranslationCommands | RotationCommands;

export const ORIGIN = { x: 0, y: 0 };

export const N = { x: 0, y: 1 };
export const S = { x: 0, y: -1 };
export const E = { x: 1, y: 0 };
export const W = { x: -1, y: 0 };

export const DIRECTION_TO_VERSOR: { [key in Direction]: Point } = {
  N: N,
  S: S,
  E: E,
  W: W,
};

export const COMMAND_TO_MOVEMENT: { [key in TranslationCommands]: Movements } =
  {
    f: 1,
    b: -1,
  };
