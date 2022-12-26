const input$$ = document.querySelector("input")
const btn$$ = document.querySelector(".btn-add")
const ul$$ = document.querySelector("ul")


let counter;



/*FUNCIÓN DONDE CAPTURAMOS EL TEXTO DEL INPUT, GUARDAMOS EN UN LI, EL CUAL AÑADIMOS DENTRO DEL UL DEL LI CONTAINER*/
function addNewItem() {

    let text$$ = input$$.value;
     const listContainer$$ = document.querySelector(".li-container")
    const li$$ = document.createElement("li");
    li$$.textContent = text$$;
    listContainer$$.appendChild(ul$$);
    ul$$.appendChild(li$$);
    li$$.appendChild(removeBtn());
    counter++;
    statusTasks();

}

btn$$.addEventListener('click', (e) => {

    e.preventDefault(); //con este metodo conseguimos que no se recargue la página cada vez que le damos al boton
    addNewItem();

});


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

function AlertEmptyInput() {

    const div$$ = document.querySelector(".search") //seleccionamos
    const p$$ = document.createElement("p"); //creamos p donde mostrar mensaje
    p$$.textContent = "introduce un texto para añadir a tu lista"; //mostramos este mensaje
    div$$.appendChild(p$$); //hacemos realidad :)
    p$$.setAttribute("class", "parragraph-invalid") //añadimos una clase a nuestro p


}

function statusTasks() {
    counter = ul$$.children.length
    
    const pTasks$$ = document.querySelector(".pTasks")
    if(!counter>0){
        pTasks$$.textContent="No tienes tareas pendientes.";
    }else{
       
        pTasks$$.textContent="";
    }
}