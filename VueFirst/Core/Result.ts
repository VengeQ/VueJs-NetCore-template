export class Success<T>{
    constructor(init: T) {
        this.value = init;
    }
    value: T;
    readonly type = 'Success'
}

export class Failure<T>{
    constructor(init: T) {
        this.value = init;
    }
    value: T;
    readonly type = 'Failure'
}

export
    type Result<T, R> = Success<T> | Failure<R>
