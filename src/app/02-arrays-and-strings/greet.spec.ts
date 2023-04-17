import { greet } from "./greet"

describe("greet", () => {

    it("should check if it contains name", () => {
        expect(greet("Naman")).toContain("Naman");
    })
})