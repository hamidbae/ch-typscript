interface LoggerInterface {
    errorLog(): void;
}

class Logger implements LoggerInterface {
error: string;

constructor(error: string) {
    this.error = error
}

public errorLog(): void {
    console.log(this.error)
}
}

const myLogger: Logger = new Logger('Error request')
myLogger.errorLog()

// interface sebagai tipe data pada object
interface User {
name: string,
password: string
}

const admin: User = {name: 'admin', password: 'test123'}