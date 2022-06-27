function Student(name, gender, age) {
   this.name = name;
   this.gender = gender;
   this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined ) {
    this.marks = [mark];
  }  else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...mark) {
  this.addMark(mark);
}

Student.prototype.getAverage = function (subjectName) {
  return (Student.marks.reduce((acc,it) => {return acc+it, 0})/Student.marks.lenght);
}

Student.prototype.exclude = function (reason) {
  delete Student.subject;
  delete Student.marks;
  this.excluded = reason;
}