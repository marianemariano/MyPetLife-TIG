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

function refresh() {
    window.location.reload();
}

function sucesso_cadastro() {
    var sucesso = "<div class='alert alert-success' role='alert'>Cadastrado com sucesso! <a href='javascript:void(0)' onclick='refresh();'>Clique aqui para atualizar a tela</a></div>";
    $("#msg_cadastro").append(sucesso);
}

function erro_cadastro() {
    var error = "<div class='alert alert-danger' role='alert'>Não foi possível realizar o cadastro!</div>";
    $("#msg_cadastro").append(error);
}

function sucesso_delete() {
    var sucesso = "<div class='alert alert-success' role='alert'>Deletado com sucesso! <a href='javascript:void(0)' onclick='refresh();'>Clique aqui para atualizar a tela</a></div>";
    $("#msg_delete").append(sucesso);

}

function erro_delete(){
    var error = "<div class='alert alert-danger' role='alert'>Não foi possível deletar este item!</div>";
    $("#msg_delete").append(error);
}



