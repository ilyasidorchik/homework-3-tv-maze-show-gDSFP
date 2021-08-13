const api = require("./api")
// @ponicode
describe("api.getShowInfo", () => {
    test("0", () => {
        let callFunction = () => {
            api.getShowInfo(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            api.getShowInfo(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            api.getShowInfo(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
