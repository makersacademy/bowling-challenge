function sum (a, b) {
    return 5
}
​
/******************/
​
if (sum(1, 2) === 3) {
    console.log(".")
} else {
    console.log("sum 1, 2 did not equal 3")
}
​
/******************/
​
function expectToEqual(actual, expected, message) {
    if (actual === expected) {
        console.log(".")
    } else {
        console.log(message)
    }
}
​
expectToEqual(sum(1, 2), 3, "sum 1, 2 did not equal 3")
​
/******************/
​
function expect(actual) {
    return {
        toEqual: function (expected) {
            if (actual === expected) {
                console.log(".")
            } else {
                console.log(`expected ${actual} to equal ${expected}, but it was not`)
            }
        } 
    }
}
​
expect(sum(1, 2)).toEqual(3);
​
/******************/
​
function expect(actual) {
    return {
        toEqual: function (expected) {
            if (actual === expected) {
                console.log(".")
            } else {
                console.log(`expected ${actual} to equal ${expected}, but it was not`)
            }
        }, // like { a: "a", b: "b" }
        notToEqual: function (expected) {
            if (actual !== expected) {
                console.log(".")
            } else {
                console.log(`expected ${actual} to equal ${expected}, but it was not`)
            }
        }
    }
}
​
expect(sum(1, 2)).toEqual(3);
expect(sum(2, 2)).notToEqual(5);
​
/******************/
​
(function() {
    window.describe_block_tag = "";
​
    function describe (description, callback) {
        // this is deliberately global!
        window.describe_block_tag = description;
​
        callback()
    }
​
    function expect(actual) {
        return {
            toEqual: function (expected) {
                if (actual === expected) {
                    console.log(".")
                } else {
                    let block_tag = window.describe_block_tag ? window.describe_block_tag : "";
                    console.log(`${block_tag}: expected ${actual} to equal ${expected}, but it was not`);
                }
            } 
        }
    }
​
    describe("sum", () => {
        expect(sum(1, 2)).toEqual(3);
    })
​
})();
​
/******************/
​
(function() {
    var describe_block_tag = "";
​
    function describe (description, callback) {
        // this is deliberately global!
         describe_block_tag = description;
        callback()
    }
​
    function it (description, callback) {
        try {
            callback()
        } catch (error) {
            console.log(`${describe_block_tag || ""}: ${description} failed with error: ${error.message}`)
        }
​
    }
​
    function expect(actual) {
        return {
            toEqual: function (expected) {
                if (actual === expected) {
                    console.log(".")
                } else {
                    throw new Error(`expected ${actual} to be ${expected}, but it was not`)
                }
            },
            toThrow: function () {
                let itThrew = false
                try {
                    actual()
                } catch (error) {
                    itThrew = true
                }
​
                if (!itThrew) {
                    throw new Error("expected it to throw an error!")
                } else {
                    console.log(".")
                }
            } 
        }
    }
​
    describe("sum", () => {
        it ("adds 1 and 2 to make 3", () => {
            expect(sum(1, 2)).toEqual(3);
        })
​
        it("throws an exception when given something which is not a number", () => {
            expect(() => {sum("one", "two")}).toThrow()
        })
    })
​
})()