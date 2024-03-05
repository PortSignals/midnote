import { renderTest } from "./render.test.js";
import { slotsTests } from "./slots.test.js";

const tests = [
    renderTest,
    slotsTests
]

tests.map((testCase) => {
    testCase()
})