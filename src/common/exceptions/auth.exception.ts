export default class AuthException extends Error {
    constructor() {
        super('Email ou senha incorreta');
    }
}
