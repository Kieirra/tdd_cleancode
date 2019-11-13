import Bowling from "./Bowling.js";

it("should be defined after instanciation", () => {
	const bowling = new Bowling();
	expect(bowling).toBeDefined();
})

	