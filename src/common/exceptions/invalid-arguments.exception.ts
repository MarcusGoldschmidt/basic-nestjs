export default class InvalidArgumentsException extends Error {
    constructor(message: string) {
        super(message);
    }
}
