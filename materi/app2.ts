function printUsernameInfo(...args: [string, number]) {
    return {
        name: args[0],
        age: args[1]
    }
}

/* sama seperti
function printUsernameInfo(args0: string, args1: number) {
} */

const employeeName: string = 'John Doe'
const employeeAge: number = 23

console.log(printUsernameInfo(employeeName, employeeAge))