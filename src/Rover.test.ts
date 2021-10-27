import { ORIGIN } from "./models";
import { Rover } from "./Rover";

describe("Rover", () => {
  describe("Should move Forward from Origin", () => {
    const startingPoint = ORIGIN;

    it("if the direction is North", () => {
      // Arrange
      const rover = new Rover(startingPoint, "N");

      // Act
      rover.move(["f"]);

      // Assert
      expect(rover.position).toStrictEqual({ x: 0, y: 1 });
    });

    it("if the direction is South", () => {
      // Arrange
      const rover = new Rover(startingPoint, "S");

      // Act
      rover.move(["f"]);

      // Assert
      expect(rover.position).toStrictEqual({ x: 0, y: -1 });
    });
    it("if the direction is East", () => {
      // Arrange
      const rover = new Rover(startingPoint, "E");

      // Act
      rover.move(["f"]);

      // Assert
      expect(rover.position).toStrictEqual({ x: 1, y: 0 });
    });

    it("if the direction is West", () => {
      // Arrange
      const rover = new Rover(startingPoint, "W");

      // Act
      rover.move(["f"]);

      // Assert
      expect(rover.position).toStrictEqual({ x: -1, y: 0 });
    });
  });

  describe("Should move Backward from Origin", () => {
    const startingPoint = ORIGIN;
    it("if the direction is North", () => {
      const rover = new Rover(startingPoint, "N");

      rover.move(["b"]);

      expect(rover.position).toStrictEqual({ x: 0, y: -1 });
    });
  });

  describe("Should rotate to East", () => {
    const startingPoint = ORIGIN;
    it("if the direction is North", () => {
      const rover = new Rover(startingPoint, "N");

      rover.move(["r"]);

      expect(rover.direction).toBe("E");
    });

    it("if the direction is South", () => {
      const rover = new Rover(startingPoint, "S");

      rover.move(["l"]);

      expect(rover.direction).toBe("E");
    });
  });

  it("Should move in a square path", () => {
    const rover = new Rover();
    rover.debug = true;

    rover.move(["f", "r", "f", "r", "f", "r", "f", "r"]);

    expect(rover.position).toStrictEqual(ORIGIN);
  });
});
