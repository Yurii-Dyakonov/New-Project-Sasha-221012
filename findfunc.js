const studentsList = [
  {
    name: "David Rayy",
    course: "mechanic",
    age: 12,
  },
  {
    name: "Sasha",
    course: "it",
    age: 31,
  },
  { name: "Yuri", course: "it", age: 60 },
  { name: "lila", course: "beauty", age: 59 },
  { name: "Kate", course: "education", age: 37 },
];
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr.indexOf(2));

const findStudent = (arrayOfStudents, name, course) => {
  const filteredStudents = arrayOfStudents.filter((studentItem) => {
    if (name.length && studentItem.name.toLowerCase().includes(name)) {
      return studentItem;
    }
    console.log(name.length);
    if (studentItem.course.toLowerCase().includes(course)) {
      return studentItem;
    }
  });
  console.log(filteredStudents);
};

findStudent(studentsList, "YU", "");
