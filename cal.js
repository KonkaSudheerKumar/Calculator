document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        var id = this.id;
        var currentValue = document.getElementById('ipt').value;
        if (id === 'EQUAL') {
                document.getElementById('ipt').value = eval(currentValue);
        } else if (id === 'AC' || id === 'CLEAR') {
            document.getElementById('ipt').value = ''; 
        } else {
            document.getElementById('ipt').value += this.textContent; 
        }
    });
});
