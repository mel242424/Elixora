const components = (() => {
    const createButton = (text, className, onClick) => {
        const button = document.createElement('button');
        button.innerText = text;
        button.className = className;
        button.onclick = onClick;
        return button;
    };

    const createInput = (type, placeholder, className) => {
        const input = document.createElement('input');
        input.type = type;
        input.placeholder = placeholder;
        input.className = className;
        return input;
    };

    const createFormGroup = (labelText, inputType, inputPlaceholder, inputClass) => {
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';

        const label = document.createElement('label');
        label.innerText = labelText;

        const input = createInput(inputType, inputPlaceholder, inputClass);

        formGroup.appendChild(label);
        formGroup.appendChild(input);

        return formGroup;
    };

    return {
        createButton,
        createInput,
        createFormGroup
    };
})();

export default components;