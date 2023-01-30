class Classroom {
    constructor(name, address, students) {
        this.name = name
        this.address = address
        this.students = students
    }

    entry(newStudent) {
        this.students.push(newStudent)
    }

    // [Symbol.iterator]() {
    //     let index = 0
    //     return {
    //         next: () => {
    //             if (index < this.students.length) {
    //                 return { done: false, value: this.students[index++] }
    //             } else {
    //                 return { done: true, value: undefined }
    //             }
    //         }
    //     }
    // }
    // 生成器替代迭代器
    *[Symbol.iterator]() {
        yield* this.students
    }
}

const classrooms = new Classroom('401', '一楼', ['张游', '姚一鹏', '大波'])
classrooms.entry('lilei')
for (const k of classrooms) {
    console.log(k);
}
