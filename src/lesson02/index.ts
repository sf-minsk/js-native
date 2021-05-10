const ages = [28, 20, 22, 1, 100, 90, 14]

const predicate = (age: number) => {
    return age > 90
}


const oldAges = [100] // > 98




type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: 'css', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150}
]

// <160
const chipPredicate = (course: CourseType) => {
    return course.price < 160;
}

const chipCourses = [
    {title: 'css', price: 110},
    {title: 'REACT', price: 150}
]
