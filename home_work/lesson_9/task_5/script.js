let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const item of coursesArray) {
    const main_div = document.createElement(`div`);
    const title_div = document.createElement(`div`);
    const monthDuration_div = document.createElement(`div`);
    const hourDuration_div = document.createElement(`div`);
    const modules_div = document.createElement(`div`);
    const ul = document.createElement(`ul`);

    main_div.classList.add('main_div');
    title_div.classList.add('title_div');
    monthDuration_div.classList.add('monthDuration_div');
    hourDuration_div.classList.add('hourDuration_div');
    modules_div.classList.add('modules_div');

    title_div.innerText = item.title;
    monthDuration_div.innerText = item.monthDuration;
    hourDuration_div.innerText = item.hourDuration;

    modules_div.appendChild(ul);

    main_div.append(title_div, monthDuration_div, hourDuration_div, modules_div);

    for (const module of item.modules) {
        const li = document.createElement(`li`);

        li.innerText = module;

        ul.appendChild(li)
    }

    document.body.appendChild(main_div)
}
