function create_counter(counter){
    const minus = counter.querySelector(".counter_minus")
    const plus = counter.querySelector(".counter_plus")
    const value = counter.querySelector(".counter_value")

    // Создаем функцию
    function increase(){
        value.textContent ++
    }

    // Делаем так что бы при нажатии на кнопку + срабатывала фуккция increase
    plus.addEventListener("click", increase)

    function deacrease(){
        if (value.textContent!= 1){
            value.textContent --
        }    
    }

    minus.addEventListener("click", deacrease)
}

const counter1 = document.querySelector(".counter")
create_counter(counter1)
const counter2 = document.querySelector(".counter:nth-of-type(2)")
create_counter(counter2)
const counter3 = document.querySelector(".counter:nth-of-type(3)")
create_counter(counter3)