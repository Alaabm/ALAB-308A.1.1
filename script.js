//Part 1
let counter = 0;

function stackSize() {
    try {
        counter++;
        stackSize();
    } catch (error) {
        console.error(`Stack overflow: ${counter}`);
    }
}

stackSize();

//Part 2

function flattenArray(array, result = []) {
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            flattenArray(array[i], result);
        } else {
            result.push(array[i]);
        }
    }
    return result;

}

function trampoline(fn) {
    return function (...argumens) {
        let result = fn(...argumens);
        while (typeof result === 'function') {
        result = result();
    }
    return result;
    };
}

const trampolinedFlattenArray = trampoline(flattenArray);

const nestedArray = [1, [2, [3, [4, 5]]]];

const flattenedArray = trampolinedFlattenArray(nestedArray);
console.log(flattenedArray);
