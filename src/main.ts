// Utility types

//Partial

interface Assingment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignment = (assign: Assingment, propsToUpdat: Partial<Assingment>): Assingment => {
    return {...assign, ...propsToUpdat}
}

const assign1: Assingment = {
    studentId: "Stud123",
    title: "Project1",
    grade: 0,
}

console.log(updateAssignment(assign1, {grade: 95}))
const assingGraded1: Assingment = updateAssignment(assign1, {grade: 95})