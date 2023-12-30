const name = document.querySelector('.name')
const age = document.querySelector('.age')
const create = document.querySelector('.create')
const list = document.querySelector('.list')
const image = document.querySelector('.image')

getData()

create.addEventListener('click', () => addData())

function addData() {
    let obj = {
        name: name.value,
        age: age.value,
        img: image.value
    }

    let data = JSON.parse(localStorage.getItem('person')) || []
    data.push(obj)
    localStorage.setItem('person', JSON.stringify(data))
    getData()
}

function getData() {
    let newData = JSON.parse(localStorage.getItem('person')) || []
    newData.forEach((el) => {
        list.innerHTML += `<h1>${el.name}</h1> <h2>${el.age}</h2> <img src="${el.img}" alt="">`
    });
}