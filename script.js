function insert(num) {
    document.form.text.value = document.form.text.value + num;
}

function equal() {
    var hasil = document.form.text.value;
    document.form.text.value = eval(hasil);
}

function percent() {
    var hasil = document.form.text.value;
    document.form.text.value = eval(hasil / 100);
}

function clean() {
    document.form.text.value = '';
}

function del() {
    var hasil = document.form.text.value;
    if (document.form.text.value == "NaN") {
        clean();
    } else {
        document.form.text.value = hasil.substring(0, hasil.length - 1);
    }
}