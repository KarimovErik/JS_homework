const $ul = document.querySelector('#people_list');

const hideLoader = () => {
    const $preloaderBlock = document.querySelector('#preloader');
    $preloaderBlock.classList.add('d-none');
};

const addPersonItem = (person) => {
    // <li class="list-group-item"> Name </li>
    // const secondFilm = person?.['films']?.[1] ?? 'Unknown';
    const secondFilm = _.get(person, '["films"][1]', 'Unknown');
    const $li = document.createElement('li');
    $li.className = 'list-group-item';

    // name + '(birth year: ' + birthYear + ')';
    $li.innerText = `
        ${person['name']}
        (birth year: ${person['birth_year']})
        (height: ${person['height']})
        - second film: ${secondFilm}
    `;
    $ul.appendChild($li);
};

// fetch('https://swapi.dev/api/people/?page=3')
//     .then((response) => response.json()) // get json from response
//     .then((json) => {
//         json.results.forEach(person => {
//             addPersonItem(person);
//         });
//     }); // get data

// request.catch();
// request.finally();

axios.get('https://swapi.dev/api/people/?page=3')
    .then((res) => {
        hideLoader();
        res.data.results.forEach(person => {
            addPersonItem(person);
        });
    });
