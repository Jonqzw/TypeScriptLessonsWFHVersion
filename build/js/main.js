"use strict";
// Utility types
const updateAssignment = (assign, propsToUpdat) => {
    return Object.assign(Object.assign({}, assign), propsToUpdat);
};
const assign1 = {
    studentId: "Stud123",
    title: "Project1",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assingGraded1 = updateAssignment(assign1, { grade: 95 });
