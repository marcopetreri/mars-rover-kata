import {
  Commands,
  COMMAND_TO_MOVEMENT,
  Direction,
  DIRECTION_TO_VERSOR,
  Movements,
  ORIGIN,
  Point,
  RotationCommands,
  TranslationCommands,
} from "./models";

export class Rover {
  constructor(
    public position: Point = ORIGIN,
    public direction: Direction = "N",
    public debug: boolean = false
  ) {}

  move(commands: Commands[]) {
    commands.forEach((c) => {
      switch (c) {
        case "f":
        case "b":
          this.position = this.translate(this.position, this.direction, c);
          this.debug && console.log("New position", this.position);
          break;
        case "r":
        case "l":
          this.direction = this.rotate(this.direction, c);
          this.debug && console.log("New direction", this.direction);
          break;
      }
    });
  }

  getVersor(direction: Direction): Point {
    return DIRECTION_TO_VERSOR[direction];
  }

  getMovement(command: Commands): Movements {
    return COMMAND_TO_MOVEMENT[command];
  }

  rotate(direction: Direction, c: RotationCommands): Direction {
    switch (true) {
      case direction === "S" && c === "r":
      case direction === "N" && c === "l":
        return "W";
      case direction === "E" && c === "r":
      case direction === "W" && c === "l":
        return "S";
      case direction === "W" && c === "r":
      case direction === "E" && c === "l":
        return "N";
      case direction === "N" && c === "r":
      case direction === "S" && c === "l":
        return "E";
    }
  }

  translate({ x: x0, y: y0 }: Point, d: Direction, c: TranslationCommands) {
    const { x: x1, y: y1 } = this.getVersor(d);
    const m = this.getMovement(c);
    return { x: x0 + x1 * m, y: y0 + y1 * m };
  }
}
