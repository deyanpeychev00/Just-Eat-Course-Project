window.onload = () => {
    insertNavigation();
    insertFooter();
    document.getElementById('orderForm').addEventListener('submit', submitOrderForm);
    hideFormResponseMessages();
};

function submitOrderForm(event) {
    event.preventDefault();
    hideFormResponseMessages();
    const validationResult = validateOrderForm(new OrderFormDataModel(extractOrderFormData()));

    if(!validationResult.success) {
        handleOrderError(validationResult.message);
    }else {
        /*
        Here additional successful order functionality can be implemented, such as sending an email,
        uploading the order details into a live database, etc.
        In that case, the OrderFormDataModel should be saved to a variable so it could be used further.
        */
        handleSuccessfulOrder(validationResult.message);
    }
}

function handleOrderError(message) {
    document.getElementById('error-message').innerText = message;
    document.getElementById('error-message').style.visibility = 'visible';
}

function handleSuccessfulOrder(message) {
    document.getElementById('orderForm').reset();
    document.getElementById('success-message').innerText = message;
    document.getElementById('success-message').style.visibility = 'visible';
}

function hideFormResponseMessages() {
    document.getElementById('error-message').style.visibility = 'hidden';
    document.getElementById('success-message').style.visibility = 'hidden';
}

function extractOrderFormData() {
    return {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        dateOfDelivery: document.getElementById('date').value,
        timeOfDelivery: document.getElementById('time').value,
        additionalInfo: document.getElementById('additionalInfo').value
    };
}

function validateOrderForm(formData) {

    if (formData.firstName.trim().length <= 0) {
        return new OrderFormResponseModel(false, 'Please enter your first name.');
    }
    if (formData.lastName.trim().length <= 0) {
        return new OrderFormResponseModel(false, 'Please enter your last name.');
    }
    if(formData.email.trim().length <= 0) {
        return new OrderFormResponseModel(false, 'Please enter your email.');
    }
    if (!_emailRegex.test(formData.email)) {
        return new OrderFormResponseModel(false, 'Your email address is invalid.');
    }
    if (!_phoneRegex.test(formData.phone)) {
        return new OrderFormResponseModel(false, 'Please enter your number in a valid format. (088-888-8888 / 0888888888 / 088 888 8888)');
    }
    if (formData.dateOfDelivery.trim().length === 0) {
        return new OrderFormResponseModel(false, 'Please enter date of delivery.');
    }
    if (formData.timeOfDelivery.trim().length === 0) {
        return new OrderFormResponseModel(false, 'Please enter time of delivery.');
    }
    if (new Date(`${formData.dateOfDelivery} ${formData.timeOfDelivery}`).getTime() <= Date.now()){
        return new OrderFormResponseModel(false, 'Please select a future date for your delivery.');
    }

    return new OrderFormResponseModel(true, 'Your order was placed successfully. We will contact you in a few minutes for confirmation.');
}