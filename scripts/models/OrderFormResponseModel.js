class OrderFormResponseModel {
    constructor(success, message) {
        this.success = success;
        this.message = message;
    }

    get _success() {return this.success};
    set _success(value) {return this.success = value};

    get _message() {return this.message};
    set _message(value) {return this.message = value};

}