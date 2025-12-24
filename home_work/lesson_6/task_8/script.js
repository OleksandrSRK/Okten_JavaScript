let coursesAndDurationArray = [
    {title: `JavaScript Complex`, monthDuration: 5},
    {title: `Java Complex`, monthDuration: 6},
    {title: `Python Complex`, monthDuration: 6},
    {title: `QA Complex`, monthDuration: 4},
    {title: `FullStack`, monthDuration: 7},
    {title: `Frontend`, monthDuration: 4}
];

let sort = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);

let filter = sort.filter(item => item.monthDuration > 5);

let map = filter.map((value, index) => {
    value.id = index + 1;
    return value;
});


console.log(map);
