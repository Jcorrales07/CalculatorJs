function add(a, b) 
{
    return a + b;
}

function subtract(a, b) 
{
    return a - b;
}

function divide(a, b) 
{
    return a / b;
}

function multiply(a, b)
{
    return a * b;
}

function menu() 
{
    let opcion = 0;
    while (opcion < 1 || opcion > 6)
    {
        console.log("Que operacion quiere hacer?");
        console.log("\t1 - Sumar");
        console.log("\t2 - Restar");
        console.log("\t3 - Dividir");
        console.log("\t4 - Multiplicar");
        console.log("\t5 - Limpiar");
        console.log("\t6 - Salir");
        opcion = parseInt(prompt("Operacion: "));
    }

    return opcion;
}

function main()
{
    let resultado = 0;
    opcion = menu();
    while (opcion !== 6)
    {
        console.log("Resultado: ", resultado);
        res = 0;

        if (resultado == 0)
        {
            resultado = parseFloat(prompt("Primer valor: "));
        }
        
        switch (opcion)
        {
            case 1:
                res = add(resultado, parseFloat(prompt("Valor a sumar: ")));
                resultado = res;
            break;

            case 2:
                res = subtract(resultado, parseFloat(prompt("Valor a restar: ")));
                resultado = res;
            break;

            case 3:
                res = divide(resultado, parseFloat(prompt("Valor a dividir: ")));
                resultado = res;
            break;

            case 4:
                res = multiply(resultado, parseFloat(prompt("Valor a multiplicar: ")));
                resultado = res;
            break;

            case 5:
                res = 0
                resultado = res;
            break;
        }
        console.log("Resultado: ", resultado)
        opcion = menu();
    }
}

main();