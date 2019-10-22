function Person (name); {
    this.name=name;
    this.greeting= () => {
        alert ("Hi I'm " +this.name);
    }
}
let maria= new Person("Maria");
console.log(maria.name);
console.log(maria.greeting)

class Shape {
    constructor(x,y) {
this.xPosition= x;
this.yPosition= y;
}
getArea(){
    return this.xPosition * this.yPosition;
}
}
let defineShape= new Shape(10,2);

class Circle extends Shape {
    constructor(x,y,radius){
        super(x,y,radius);
        this.radius=radius;
    }
    getArea(){
        return (this.xPosition * this.yPosition) / this.radius;
}
}

