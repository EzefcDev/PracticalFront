const list = document.getElementById('list')
const buttonAdd = document.getElementById('add')
const inputText = document.getElementById('input-text')
const trList = document.getElementsByTagName('tr')
const buttonClear = document.getElementsByTagName('button')
let id = 0
let jobs = []

buttonAdd.addEventListener('click',()=>{
    let job = inputText.value
    if (job !== '') {
        id++
        jobs.push({
            id,
            job,
            status:false
        })
        let tr = document.createElement('tr')
        tr.innerHTML = `<th>${id}</th><th>${job}</th><th><input onclick="check(${id})" type="checkbox"></th><th><button onclick="clearOn(${id})">BORRAR</button></th>`
        list.appendChild(tr)
    }
})

const check = (id) => {
    const newJobs = jobs.filter(item => {
        if(item.id === id ){
            item.status = !item.status
        }
        return item
    })
}

const clearOn = (id) => {
    trList[id].classList.add("invisible")
}