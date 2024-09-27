// Utility types

//Partial

interface Assingment {
    studentId: string;
    title: string;
    grade: number;
    verified?: boolean;
  }
  
  const updateAssignment = (
    assign: Assingment,
    propsToUpdat: Partial<Assingment>
  ): Assingment => {
    return { ...assign, ...propsToUpdat };
  };
  
  const assign1: Assingment = {
    studentId: "Stud123",
    title: "Project1",
    grade: 0,
  };
  
  console.log(updateAssignment(assign1, { grade: 95 }));
  const assingGraded1: Assingment = updateAssignment(assign1, { grade: 95 });
  
  //Required and Readonly
  
  const recordAssignment = (assign: Required<Assingment>): Assingment => {
    // Send to database or something
    return assign;
  };
  
  const assignVeryfied: Readonly<Assingment> = {
    ...assingGraded1,
    verified: true,
  };
  
  //assignVeryfied.grade = 85; / Does not work because it is readonly do to utility type
  
  //recordAssignment(assingGraded1); / Does not work because veryfied is required do to the Required utility type
  recordAssignment({ ...assingGraded1, verified: true }); // Works because all required properties are provided
  
  // Record type
  
  const hexColorMap: Record<string, string> = {
    red: "#ff0000",
    green: "00ff00",
    blue: "0000ff",
  };
  
  type Students = "Sara" | "Kelly";
  type LetterGrade = "A" | "B" | "c" | "D" | "F";
  
  const finalGrades: Record<Students, LetterGrade> = {
    Sara: "B",
    Kelly: "F",
  };
  
  interface Grades {
    assing1: number;
    assing2: number;
  }
  
  const gradeData: Record<Students, Grades> = {
    Sara: { assing1: 87, assing2: 83 },
    Kelly: { assing1: 19, assing2: 87 },
  };
  
  // Pick & Omit
  
  type AssingResult = Pick<Assingment, "studentId" | "grade">;
  
  const score: AssingResult = {
    studentId: "K123",
    grade: 87,
  };
  
  type AssingPreview = Omit<Assingment, "grade" | "veryfied">;
  
  const preview: AssingPreview = {
    studentId: "K123",
    title: "FAssingment",
  };
  
  // Exclude and Extract
  
  type adjustedGrade = Exclude<LetterGrade, "U">;
  
  type highGrade = Extract<LetterGrade, "A" | "B">;
  
  // Not nullable
  
  type allPossibleGrades = "Dave" | "John | null" | undefined;
  
  type nameOnly = NonNullable<allPossibleGrades>;
  
  // Return type
  
  //type newAssign = {title: string, points: number}
  
  const createNewAssign = (title: string, points: number) => {
    return { title, points };
  };
  
  type newAssign = ReturnType<typeof createNewAssign>;
  
  const tsAssign: newAssign = createNewAssign("UtilityTypes", 100);
  console.log(tsAssign);
  
  // Parameters
  
  type assignParams = Parameters<typeof createNewAssign>;
  
  const assignArgs: assignParams = ["Generics", 100];
  
  const tsAssign2: newAssign = createNewAssign(...assignArgs);
  console.log(tsAssign2);
  
  // Awaited - Helps us with promis
  
  interface User {
    id: number;
    name: string;
    userName: string;
    email: string;
  }
  
  const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        if (err instanceof Error) console.log(err.message);
      });
    return data;
  };
  
  type fetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;
  fetchUsers().then((users) => console.log(users));
  