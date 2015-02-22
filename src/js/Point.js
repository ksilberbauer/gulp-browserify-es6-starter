class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get prop() {
        return this.val.length;
    }

    set prop(value) {
        this.val = value;
    }

    toString() {
        return `(${this.x}, ${this.y})`;
    }
}

module.exports = Point;