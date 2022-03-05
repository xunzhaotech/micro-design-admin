class Cat {
  name: string;
  color: string;
  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }
  eat() {
    // 原型上的方法
    console.log("吃");
  }
}
const c3 = new Cat("jeck", "red");
console.log(c3);
