

const liorInfo = 
{
    name: 'Lior Kauffman',
    image: 'LiorImage.jpg',
    mail: '123liorkauffman@gmail.com',
    hobbies: ['Diving','Training','Nature'],
    course: [
        {courseName: 'Cloud Computing', courseCredit: '2.5'},
        {courseName: 'Deep Learning', courseCredit: '3'},
        {courseName: 'Computer Network', courseCredit: '3'},
        {courseName: 'Project Part A', courseCredit: '4'},
        {courseName: 'History', courseCredit: '2'}
    ]
}


const ravivInfo =
{
    name: 'Raviv Komem',
    image: 'ravivImage.jpg',
    mail: 'ravivkomem@gmail.com',
    hobbies: ['Cloud Computing', 'Arduino', 'Netflix Binge', 'Aviation'],
    course: [
        {courseName: 'Cloud Computing', courseCredit: '2.5'},
        {courseName: 'Capstone Project Phase II', courseCredit: '4'},
        {courseName: 'Web Technologies', courseCredit: '4'},
        {courseName: 'Testing Digital Systems', courseCredit: '3.5'}
    ]
}

const fillPersonInformation = (container, personInfo) =>
{
    let personName = `<div id=personName class=personInfo>Full Name: ${personInfo.name}</div>`
    let personImage = `<div id=personImage class=personInfo>Image: <img src=${personInfo.image}></div>`
    let personHobbies = `<div id=personHobbies class=personInfo>Hobbies: ${personInfo.hobbies}</div>`
    let personMail = `<div id=personMail class=personInfo onclick="window.location.href='mailto:${personInfo.mail}';">Mail: ${personInfo.mail} </div>`
    let personCourses = `<div id=personCourses class=personInfo>${generateCourseTable(personInfo.course).outerHTML}</div>`

    let anchorList = `<div class=personInfo>${generateAnchorListHtml()}</div>`
    
    container.insertAdjacentHTML('beforeend', anchorList)
    container.insertAdjacentHTML('beforeend', personName)
    container.insertAdjacentHTML('beforeend', personImage)
    container.insertAdjacentHTML('beforeend', personHobbies)
    container.insertAdjacentHTML('beforeend', personMail)
    container.insertAdjacentHTML('beforeend', personCourses)
}

const generateAnchorListHtml = () =>
{
    const anchorList = 
    [   {ref: 'personName', text: 'Name'},
        {ref: 'personImage', text: 'Image'},
        {ref: 'personHobbies', text: 'Hobbies'},
        {ref: 'personMail', text: 'Mail'},
        {ref: 'personCourses', text: 'Courses'},
    ]

    return anchorList.map(a=>generateAnchorHtml(a.ref, a.text)).join("")
    
}
const generateAnchorHtml = (ref, text) =>
{
    return `<button class=informationAnchor onclick="window.location.href='#${ref}';">${text}</button>`
}

const generateCourseTable = (courseList) =>
{
    let courseTable = document.createElement('table')
    let tableHeader = `<tr><th>Course Name</th><th>Credit</th></tr>`
    courseTable.insertAdjacentHTML('beforeend', tableHeader)

    for (var i=0; i < courseList.length; i++)
    {
        course = courseList[i];
        let tableRow = `<tr><td>${course.courseName}</td><td>${course.courseCredit}</td></tr>`

        courseTable.insertAdjacentHTML('beforeend', tableRow)
    }

    return courseTable;
}

/* *************** */
/* HTML Generation */
/* *************** */
let person = document.getElementById('person');

let personInfo = null;
if (person.innerText === 'Lior')
{
    personInfo = liorInfo;
}
else if (person.innerText === 'Raviv')
{
    personInfo = ravivInfo;
}

person.innerText = '';

fillPersonInformation(person, personInfo);