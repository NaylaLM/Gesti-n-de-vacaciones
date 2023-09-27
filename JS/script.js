//TODO LO QUE ESTA AQUI ES DEL CALENDARIO
const currentDate = document.querySelector(".current-date")
 let date = new Date()
 currYear = date.getFullYear(),
 currMonth = date.getMonth();
 currentDate = describe('currYear', () => { currMonth });
 

console.log(date, currYear, currMonth);

const renderCalendar = () => {
    currentDate.innerText = `${currMonth} ${currYear}`;
}
renderCalendar();

//LISTA DESPLEGABLE
//LOGIN
//ACCESO A LA BASE DE DATOS