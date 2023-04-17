import { getCurrencies } from "./getCurrencies"

describe("getCurrencies", () => {
    it("should check currency", () => {
        expect(getCurrencies()).toContain("USD");
        expect(getCurrencies()).toContain("EUR");
        expect(getCurrencies()).toContain("AUD");
    })
})