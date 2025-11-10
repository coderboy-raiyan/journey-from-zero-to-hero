// map

const courses = new Map();

courses.set("course1", { courseId: "level-2" });
courses.set("course2", { courseId: "programming-hero" });

console.log(courses.get("course1"));

const fruits = [
  ["apple", 200],
  ["banana", 500],
];

const fruitsPrice = new Map(fruits);
