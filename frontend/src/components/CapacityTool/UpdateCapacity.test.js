const UpdateCapacity = require("./UpdateCapacity")
// @ponicode
describe("componentWillMount", () => {
    let inst

    beforeEach(() => {
        inst = new UpdateCapacity.UpdateCapacity()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
