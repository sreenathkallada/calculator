

const inputelement1 = document.querySelector('#element1');
const inputelement2 = document.querySelector('#element2');
const submit = document.querySelector('#submit');
const operation = document.querySelector('#operation');
const result = document.querySelector('#result');
const reset = document.querySelector('#reset');






submit.addEventListener('click', myFunction);

function myFunction() {
    let input1 = parseInt(inputelement1.value);
    let input2 = parseInt(inputelement2.value);
    let opVal = operation.value;
    let output = 0;
    function action() {
        if (opVal == 'add') {
            return output = input1 + input2
        }
        else if (opVal == 'sub') {
            return output = input1 - input2
        }
        else if (opVal == 'mult') {
            return output = input1 * input2
        }
        else if (opVal == 'div') {
            return output = input1 / input2
        }
        else {
            output = "Failed to Calculate, Kindly recheck inputs"
        }
    }
    action();

    result.innerText = `Result is ~ ${output}`;
    resetaction();

    function resetaction() {
        reset.innerHTML = "<button id='reset1'>Reset</button>";
        const reset1 = document.querySelector('#reset1');
        reset1.addEventListener('click', function () {
            inputelement1.value = '';
            inputelement2.value = '';
            operation.value = 'sel';
            result.innerText = '';
            reset.innerHTML = '';


        })

    }

}



