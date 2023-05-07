const obtener = document.getElementById('obtener')
const input = document.getElementsByTagName('input')
const msg = document.getElementById('advertencia')
const edad = document.getElementById('edad')
const date = new Date()
const year = date.getFullYear()
const month = date.getMonth()+1
const day = date.getDate()

obtener.addEventListener('click',()=>{
    let data = input[0].value.split('-')
    const yearActual = year - data[0]
    if(data.length == 3 && yearActual > 0){
        msg.innerText= ''
        const monthActual = month - data[1]
        const dayActual = day - data[2]
        if(monthActual == 0 && dayActual == 0){
            edad.innerText = yearActual  + ' años'
        }else{
            edad.innerText = yearActual - 1 + ' años'
        }
    }else{
        msg.innerText = 'Complete la fecha correctamente'
    }
})