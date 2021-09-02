class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2
    }

    set diameter(newDiameter) {
        this.radius = newDiameter / 2;
    }

    get circumference() {
        return 2 * Math.PI * this.radius 
    }

    set circumference(newCirc) {
        this.radius = (newCirc / Math.PI) / 2;
    }

    get area() {
        return Math.PI * (this.radius ** 2)
    }

    set area(newArea) {
        this.radius = Math.sqrt(newArea / Math.PI);
    }

}