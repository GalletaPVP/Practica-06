function calculo(){
    var grupo = document.getElementById('grupo');
    var valor = grupo.options[grupo.selectedIndex].text;
    if(valor === 'IBM-Componente 1-NM'){
        document.getElementById('presupuesto').value = 'IBM-Componente 1-NM';
    }else if(valor === 'IBM-Componente 2-NM'){
        document.getElementById('presupuesto').value = 'IBM-Componente 2-NM';
    }else if(valor === 'IBM-Componente 3-NM'){
        document.getElementById('presupuesto').value = 'IBM-Componente 3-NM';
    }else if(valor === 'Todos los presupuestos'){
        document.getElementById('presupuesto').value = 'Todos los presupuestos';
    }
}

(function(){
    'use strict';
    window.addEventListener('load', function(){
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form){
            form.addEventListener('submit', function(event){
                if(form.checkValidity() === false){
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})()

document.getElementById('grupo').addEventListener('select', calculo)