function main() {
  console.log("hello world!")
}

main()
;```javascript
function fibonacci(n) {
    const phi = (1 + Math.sqrt(5)) / 2;
    return Math.round(Math.pow(phi, n) / Math.sqrt(5));
}
```

// This comment wasn't made by junior

function solveQuadratic(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return [];
    } else if (discriminant === 0) {
        const x = -b / (2 * a);
        return [x];
    } else {
        const sqrtDiscriminant = Math.sqrt(discriminant);
        const x1 = (-b + sqrtDiscriminant) / (2 * a);
        const x2 = (-b - sqrtDiscriminant) / (2 * a);
        return [x1, x2];
    }
}

console.log(solveQuadratic(1, -3, 2)); // Example usage: [2, 1]
function solveQuadratic(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return []; // No real roots
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        return [root]; // One real root
    } else {
        const sqrtDiscriminant = Math.sqrt(discriminant);
        const root1 = (-b + sqrtDiscriminant) / (2 * a);
        const root2 = (-b - sqrtDiscriminant) / (2 * a);
        return [root1, root2]; // Two real roots
    }
}
console.log(' /\\_/\\\n( o.o )\n > ^ <');