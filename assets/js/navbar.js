function cve(cod_animal) {
    var loc = location.search.substring(1, location.search.length);
    var param_value = false;
    var params = loc.split("&");
    for (i = 0; i < params.length; i++) {
        var parameter = 'minhaVariavel';
        param_name = params[i].substring(0, params[i].indexOf('='));
        if (param_name == parameter) {
            param_value = params[i].substring(params[i].indexOf('=') + 1);
        }
    }
    if (param_value) {
        return window.location.replace("http://localhost/mypetlife/cve.php?minhaVariavel=" + param_value);
    }
    else {
        return undefined;
    }

}


function higiene(cod_animal) {
    var loc = location.search.substring(1, location.search.length);
    var param_value = false;
    var params = loc.split("&");
    for (i = 0; i < params.length; i++) {
        var parameter = 'minhaVariavel';
        param_name = params[i].substring(0, params[i].indexOf('='));
        if (param_name == parameter) {
            param_value = params[i].substring(params[i].indexOf('=') + 1);
        }
    }
    if (param_value) {
        return window.location.replace("http://localhost/mypetlife/higiene.php?minhaVariavel=" + param_value);
    }
    else {
        return undefined;
    }

}


function medicamento(cod_animal) {
    var loc = location.search.substring(1, location.search.length);
    var param_value = false;
    var params = loc.split("&");
    for (i = 0; i < params.length; i++) {
        var parameter = 'minhaVariavel';
        param_name = params[i].substring(0, params[i].indexOf('='));
        if (param_name == parameter) {
            param_value = params[i].substring(params[i].indexOf('=') + 1);
        }
    }
    if (param_value) {
        return window.location.replace("http://localhost/mypetlife/medicamento.php?minhaVariavel=" + param_value);
    }
    else {
        return undefined;
    }

}


function alergia(cod_animal) {
    var loc = location.search.substring(1, location.search.length);
    var param_value = false;
    var params = loc.split("&");
    for (i = 0; i < params.length; i++) {
        var parameter = 'minhaVariavel';
        param_name = params[i].substring(0, params[i].indexOf('='));
        if (param_name == parameter) {
            param_value = params[i].substring(params[i].indexOf('=') + 1);
        }
    }
    if (param_value) {
        return window.location.replace("http://localhost/mypetlife/alergia.php?minhaVariavel=" + param_value);
    }
    else {
        return undefined;
    }
}



function cirurgia(cod_animal) {
    var loc = location.search.substring(1, location.search.length);
    var param_value = false;
    var params = loc.split("&");
    for (i = 0; i < params.length; i++) {
        var parameter = 'minhaVariavel';
        param_name = params[i].substring(0, params[i].indexOf('='));
        if (param_name == parameter) {
            param_value = params[i].substring(params[i].indexOf('=') + 1);
        }
    }
    if (param_value) {
        return window.location.replace("http://localhost/mypetlife/cirurgia.php?minhaVariavel=" + param_value);
    }
    else {
        return undefined;
    }

}



function local(cod_animal) {
    var loc = location.search.substring(1, location.search.length);
    var param_value = false;
    var params = loc.split("&");
    for (i = 0; i < params.length; i++) {
        var parameter = 'minhaVariavel';
        param_name = params[i].substring(0, params[i].indexOf('='));
        if (param_name == parameter) {
            param_value = params[i].substring(params[i].indexOf('=') + 1);
        }
    }
    if (param_value) {
        return window.location.replace("http://localhost/mypetlife/local.php?minhaVariavel=" + param_value);
    }
    else {
        return undefined;
    }

}


function pulgas(cod_animal) {
    var loc = location.search.substring(1, location.search.length);
    var param_value = false;
    var params = loc.split("&");
    for (i = 0; i < params.length; i++) {
        var parameter = 'minhaVariavel';
        param_name = params[i].substring(0, params[i].indexOf('='));
        if (param_name == parameter) {
            param_value = params[i].substring(params[i].indexOf('=') + 1);
        }
    }
    if (param_value) {
        return window.location.replace("http://localhost/mypetlife/pulgas.php?minhaVariavel=" + param_value);
    }
    else {
        return undefined;
    }

}

function medico(cod_animal) {
    var loc = location.search.substring(1, location.search.length);
    var param_value = false;
    var params = loc.split("&");
    for (i = 0; i < params.length; i++) {
        var parameter = 'minhaVariavel';
        param_name = params[i].substring(0, params[i].indexOf('='));
        if (param_name == parameter) {
            param_value = params[i].substring(params[i].indexOf('=') + 1);
        }
    }
    if (param_value) {
        return window.location.replace("http://localhost/mypetlife/medico.php?minhaVariavel=" + param_value);
    }
    else {
        return undefined;
    }

}




