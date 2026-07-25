class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    findArea() {
        return this.length * this.width;
    }
}

const rect = new Rectangle(5, 10);
console.log(`Area: ${rect.findArea()}`);