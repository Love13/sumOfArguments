function addArguments() {
    let total = 0

    for (let i = 0; i < arguments.length; i++) {

        if (isNaN(arguments[i])) {
            console.log(arguments[i] + ' is not a number')
            continue
        }

        total += arguments[i]
    }

    console.log(`The total is ` + total)
}

addArguments(['yes', 'sir'], 1, 3, 4, 6, 'hello')