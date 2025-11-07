document.addEventListener('DOMContentLoaded', function() {
    
    const registrationForm = document.getElementById('registrationForm');
    const successMessage = document.getElementById('successMessage');
    
    const calcularBtn = document.getElementById('calcularBtn');
    const precioLibroInput = document.getElementById('precioLibro');
    const tipoIVASelect = document.getElementById('tipoIVA');
    const resultadoInput = document.getElementById('resultado');
    

    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        

        const nombre = document.getElementById('nombre');
        const nombreError = document.getElementById('nombreError');
        if (nombre.value.trim() === '') {
            nombreError.style.display = 'block';
            isValid = false;
        } else {
            nombreError.style.display = 'none';
        }
        

        const apellidos = document.getElementById('apellidos');
        const apellidosError = document.getElementById('apellidosError');
        if (apellidos.value.trim() === '') {
            apellidosError.style.display = 'block';
            isValid = false;
        } else {
            apellidosError.style.display = 'none';
        }
        
        // Validar teléfono (formato xxx xx xx xx)
        const telefono = document.getElementById('telefono');
        const telefonoError = document.getElementById('telefonoError');
        const telefonoRegex = /^\d{3} \d{2} \d{2} \d{2}$/;
        if (!telefonoRegex.test(telefono.value)) {
            telefonoError.style.display = 'block';
            isValid = false;
        } else {
            telefonoError.style.display = 'none';
        }
        
        
        const password = document.getElementById('password');
        const passwordError = document.getElementById('passwordError');
        if (password.value.length < 8) {
            passwordError.style.display = 'block';
            isValid = false;
        } else {
            passwordError.style.display = 'none';
        }
        
        // Validar áreas de interés
        const intereses = document.getElementById('intereses');
        const interesesError = document.getElementById('interesesError');
        if (intereses.value === '') {
            interesesError.style.display = 'block';
            isValid = false;
        } else {
            interesesError.style.display = 'none';
        }
        
        
        const fechaNacimiento = document.getElementById('fechaNacimiento');
        const fechaError = document.getElementById('fechaError');
        if (fechaNacimiento.value === '') {
            fechaError.style.display = 'block';
            isValid = false;
        } else {
            fechaError.style.display = 'none';
        }
        
       
        const acepto = document.getElementById('acepto');
        const aceptoError = document.getElementById('aceptoError');
        if (!acepto.checked) {
            aceptoError.style.display = 'block';
            isValid = false;
        } else {
            aceptoError.style.display = 'none';
        }
        

        if (isValid) {
            successMessage.style.display = 'block';
            registrationForm.reset();
        }
    });
    
    
    calcularBtn.addEventListener('click', function() {
        const precioError = document.getElementById('precioError');
        
        
        const precioRegex = /^\d+(\.\d{1,2})?$/;
        if (!precioRegex.test(precioLibroInput.value)) {
            precioError.style.display = 'block';
            return;
        } else {
            precioError.style.display = 'none';
        }
        
        
        const precio = parseFloat(precioLibroInput.value);
        const tipoIVA = parseFloat(tipoIVASelect.value);
        const precioConIVA = precio * (1 + tipoIVA);
        
        
        resultadoInput.value = precioConIVA.toFixed(2) + ' $';
    });
    
    
    document.getElementById('telefono').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 0) {
            value = value.substring(0, 9);
            
            let formattedValue = '';
            if (value.length > 0) {
                formattedValue += value.substring(0, 3);
            }
            if (value.length > 3) {
                formattedValue += ' ' + value.substring(3, 5);
            }
            if (value.length > 5) {
                formattedValue += ' ' + value.substring(5, 7);
            }
            if (value.length > 7) {
                formattedValue += ' ' + value.substring(7, 9);
            }
            
            e.target.value = formattedValue;
        }
    });

});
