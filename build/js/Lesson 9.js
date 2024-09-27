"use strict";
// Utility types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
//Required and Readonly
const recordAssignment = (assign) => {
    // Send to database or something
    return assign;
};
const assignVeryfied = Object.assign(Object.assign({}, assingGraded1), { verified: true });
//assignVeryfied.grade = 85; / Does not work because it is readonly do to utility type
//recordAssignment(assingGraded1); / Does not work because veryfied is required do to the Required utility type
recordAssignment(Object.assign(Object.assign({}, assingGraded1), { verified: true })); // Works because all required properties are provided
// Record type
const hexColorMap = {
    red: "#ff0000",
    green: "00ff00",
    blue: "0000ff",
};
const finalGrades = {
    Sara: "B",
    Kelly: "F",
};
const gradeData = {
    Sara: { assing1: 87, assing2: 83 },
    Kelly: { assing1: 19, assing2: 87 },
};
const score = {
    studentId: "K123",
    grade: 87,
};
const preview = {
    studentId: "K123",
    title: "FAssingment",
};
// Return type
//type newAssign = {title: string, points: number}
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("UtilityTypes", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => {
        return res.json();
    })
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then((users) => console.log(users));
