const input$$ = document.querySelector("input")
const btn$$ = document.querySelector(".btn-add")
const ul$$ = document.querySelector("ul")


btn$$.addEventListener('click', (e) => {

    e.preventDefault(); //con este metodo conseguimos que no se recargue la página cada vez que le damos al boton
    const text$$ = input$$.value; //añadimos el texto del input a una variable
    const li$$ = document.createElement("li"); //creamos el elemento li
    li$$.textContent = text$$;
    ul$$.appendChild(li$$)
});


function btnDelete(){

    const btnDelete$$ = document.createElement("button")
    btnDelete$$.textContent = "X";
    btnDelete$$.setAttribute("class","btn-delete")
}