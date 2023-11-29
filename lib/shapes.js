//classes that utilize constructors to define what a shape is
class Shape {
    constructor() {
        this.color = "";
    }
    //shape class takes in a setColor function
    setColor(colorVar) {
        this.color = colorVar;
    }
}

//triangle class inherits properties in shape class
class Triangle extends Shape {
    // Returns shape with color input
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}

//square class inherits any properties in shape class
class Square extends Shape {
    // Returns shape with color input
    render() {
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}"/>`
    }
}

//circle class inherits properties in shape class
class Circle extends Shape {
    // Returns shape with color input
    render() {
        return `<circle cx="150" cy="115" r="80" fill="${this.color}"/>`
    }
}

//exports triangle, square, and circle classes
module.exports = { Triangle, Square, Circle };