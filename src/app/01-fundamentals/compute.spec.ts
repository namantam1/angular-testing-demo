import { compute } from "./compute"

describe("compute", () => {
    it("should check postivie", () => {
        expect(compute(10)).toBe(11);
    });

    it("should check negative", () => {
        expect(compute(-1)).toBe(0);
    })
})