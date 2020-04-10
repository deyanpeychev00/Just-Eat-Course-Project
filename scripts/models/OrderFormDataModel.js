class OrderFormDataModel {
    constructor(props) {
        this.firstName = props.firstName;
        this.lastName = props.lastName;
        this.email = props.email;
        this.phone = props.phone;
        this.dateOfDelivery = props.dateOfDelivery;
        this.timeOfDelivery = props.timeOfDelivery;
        this.additionalInfo = props.additionalInfo;
    }

    get _firstName() {return this.firstName};
    set _firstName(value) {return this.firstName = value};

    get _lastName() {return this.lastName};
    set _lastName(value) {return this.lastName = value};

    get _email() {return this.email};
    set _email(value) {return this.email = value};

    get _phone() {return this.phone};
    set _phone(value) {return this.phone = value};

    get _dateOfDelivery() {return this.dateOfDelivery};
    set _dateOfDelivery(value) {return this.dateOfDelivery = value};

    get _timeOfDelivery() {return this.timeOfDelivery};
    set _timeOfDelivery(value) {return this.timeOfDelivery = value};

    get _additionalInfo() {return this.additionalInfo};
    set _additionalInfo(value) {return this.additionalInfo = value};
}