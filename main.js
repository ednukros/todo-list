const input$$ = document.querySelector("input")
const btn$$ = document.querySelector(".btn-add")
const ul$$ = document.querySelector("ul")
const pTasks$$ = document.querySelector(".pTasks")


let counter;



/*FUNCIÓN DONDE CAPTURAMOS EL TEXTO DEL INPUT, GUARDAMOS EN UN LI, EL CUAL AÑADIMOS DENTRO DEL UL DEL LI CONTAINER*/
function addNewItem() {


    const listContainer$$ = document.querySelector(".li-container")
    const li$$ = document.createElement("li");
    let text$$ = input$$.value;
    li$$.textContent = text$$;
    listContainer$$.appendChild(ul$$);
    ul$$.appendChild(li$$);
    li$$.appendChild(removeBtn());
    counter++;
    statusTasks();

}



btn$$.addEventListener('click', validate);

function validate(e) {
    e.preventDefault(); //con este metodo conseguimos que no se recargue la página cada vez que le damos al boton

    let valid = true;
    const nameError = document.querySelector("#nameError");

    if (!input$$.value || input$$.value === " ") {
        nameError.removeAttribute("hidden");
        input$$.removeAttribute("valid");
        input$$.setAttribute("class","invalid");
        nameError.setAttribute("class","visible");
        nameError.setAttribute("aria-hidden", false);
        nameError.setAttribute("aria-invalid", true);
    } else {
        input$$.removeAttribute("invalid");
        nameError.removeAttribute("visible");
        nameError.setAttribute("class","hidden");
        input$$.setAttribute("class","valid");
        nameError.setAttribute("aria-hidden", true);
        nameError.setAttribute("aria-invalid", false);
        addNewItem();
    }

    return valid;

}



















function removeBtn() {

    //creacion del boton de borrado
    const btnDelete$$ = document.createElement("button");
    btnDelete$$.textContent = "X";
    btnDelete$$.setAttribute("class", "btn-delete");


    btnDelete$$.addEventListener('click', (e) => {

        //borramos el elemento padre del botón para conseguir el efecto deseado
        const item = e.target.parentElement;
        ul$$.removeChild(item);
        counter--;
        statusTasks();



    });

    return btnDelete$$;

}



// function AlertEmptyInput() {

// //    if(p$$ === textInvalid){
// //    const textInvalid = "introduce un texto para añadir a tu lista";

// //    const div$$ = document.querySelector(".search") //seleccionamos
// //    const p$$ = document.createElement("p"); //creamos p donde mostrar mensaje
// //    p$$.textContent = textInvalid ; //mostramos este mensaje
// //    div$$.appendChild(p$$); //hacemos realidad :)
// //    p$$.setAttribute("class", "parragraph-invalid") //añadimos una clase a nuestro p
//    
// //    }



// }

function statusTasks() {
    counter = ul$$.children.length


    if (!counter > 0) {
        pTasks$$.textContent = "No tienes tareas pendientes.";
    } else {

        pTasks$$.textContent = "";
    }
}