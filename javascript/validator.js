
function Validator(formSelector) {
    var _this = this;
    /*
      *Quy ước tạo rules
        -Nếu có lỗi trả về message error
        -Nếu ko có lỗi trả về undefined
    */
    var validatorRules = {
        required(value) {
            return value.trim() ? undefined : 'Vui lòng nhập thông tin';
        },
        email(value) {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Vui lòng nhập đúng định dạng email';
        },
        password(value) {
            const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
            return regex.test(value) ? undefined : 'Vui lòng nhập mật khẩu tối thiểu sáu ký tự, ít nhất một chữ cái và một số';
        },
        repeat_password(value, confirmValue) {
            return value === confirmValue ? undefined : 'Password nhập vào không đúng';
        },
        numberPhone(value) {
            const regex = /^\d{10,}$/;
            return regex.test(value) ? undefined : 'Số điện thoại không hợp lệ';
        },
        requiredSelect(value){
            return value == '1' ? undefined : 'Vui lòng chọn thông tin';
        }
    }

    // Lấy ra form element
    const formElement = document.querySelector(formSelector);
    var formRules = {};

    if (formElement) {

        // Lấy ra tất cả các thẻ input có trong form và có các attribute là name và rules
        const formInputs = formElement.querySelectorAll('[name][rules]');
        //Lặp qua từng input
        for (let input of formInputs) {
            //Lấy ra rule và tách chúng
            let rules = input.getAttribute('rules').split('|');
            for (let rule of rules) {
                //Kiểm tra xem có phải là một array hay không
                if (Array.isArray(formRules[input.getAttribute('name')])) {
                    formRules[input.getAttribute('name')].push(validatorRules[rule]);
                } else {
                    // Thêm một thành phần vào obj formRules
                    formRules[input.getAttribute('name')] = [validatorRules[rule]];
                }
            }
            // Khi thực hiện hành đông blor
            input.addEventListener('blur', () => {
                validate(input, formRules[input.getAttribute('name')]);
            });

            // Khi thục hiện hành động nhập
            input.addEventListener('input', () => {
                onInputChange(input);
            });
        }
    }

    // Xử lí sự kiện khi submit
    formElement.onsubmit = (e) => {
        // loại bỏ hành động mặc định mặc định của element
        e.preventDefault();
        let isFormvalid = true;
        // lặp qua các rule và kiểm tra  validate
        const formInputs = formElement.querySelectorAll('[name][rules]');

        formInputs.forEach(inputElement => {
            
            const checkError = validate(inputElement, formRules[inputElement.getAttribute('name')]);
            if (checkError) {
                isFormvalid = false;
            }
        })
        // kiểm tra xem có lỗi khi submit hay không
        if (isFormvalid) {
            // Sắp mit với javascript
            if (typeof _this.onSubmit === 'function') {
                //Lấy ra tất cả thẻ có name và ko có disabled trong form
                let elementInputs = formElement.querySelectorAll('[name]:not([disabled');
                // convert element sang array sau đó dùng reduce lấy ra một object
                let formValues = Array.from(elementInputs).reduce((values, inputElement) => {
                    switch (inputElement.type) {
                        case 'radio':
                            if (inputElement.checked) {
                                values[inputElement.name] = inputElement.value;
                            }
                            break;
                        case 'checkbox':
                            if (inputElement.checked) {
                                if (values[inputElement.name]) {
                                    values[inputElement.name].push(inputElement.value);
                                } else {
                                    values[inputElement.name] = [inputElement.value];
                                }
                            }
                            break;
                        case 'file':
                            values[inputElement.name] = inputElement.files;
                        break;
                        default:
                            values[inputElement.name] = inputElement.value;
                    }
                    return values;
                }, {});
                //Trả dữ liệu về submit
                _this.onSubmit(formValues);
            }
            //Submit với html
            else {
                formElement.submit();
            }
        }
    }

    // Hàm thục hiện validate
    function validate(inputElement, rules) {
        const formGroup = inputElement.closest('.form-group');
        const messageElement = formGroup.querySelector('.form-message');

        // Lấy ra các rule của element
        let messengerError;
        for (let i = 0; i < rules.length; i++) {

            if (inputElement.name === 'password_confirmation') {
                let valuePassword = formElement.querySelector('#password').value;
                messengerError = rules[i](inputElement.value, valuePassword);
            }else{
                messengerError = rules[i](inputElement.value);
            }
            //Lấy ra message và kiểm tra
            if (messengerError) break;
        }

        if (messengerError) {
            messageElement.textContent = messengerError;
            formGroup.classList.add('invalid');
        } else {
            messageElement.textContent = '';
            formGroup.classList.remove('invalid');
        }
        return !!messengerError;
    }


    // Hàm thực hiện khi input
    function onInputChange(inputElement) {
        const formGroup = inputElement.closest('.form-group');
        const messageElement = formGroup.querySelector('.form-message');
        messageElement.textContent = '';
        formGroup.classList.remove('invalid');
    }

}