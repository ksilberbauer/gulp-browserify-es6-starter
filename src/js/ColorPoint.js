var Point = require('./Point');

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }

    toString() {
        return super.toString() + ' in ' + this.color;
    }
}

module.exports = ColorPoint;