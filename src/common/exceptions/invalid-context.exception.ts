export default class InvalidContextException extends Error {
    constructor(message: string) {
        super(message);
    }
}
