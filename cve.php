<!doctype html>
<html lang="pt-br">

<?php include "includes/head.php"; ?>

<body style="background:#1976d2">
    <?php include "includes/navbar.php"; ?>
        <center>
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" style="margin-left:38%" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab"
                        aria-controls="nav-home" aria-selected="true">Consultas</a>
                    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile"
                        aria-selected="false">Vacinas</a>
                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact"
                        aria-selected="false">Exames</a>
                </div>
            </nav>
            <div class="tab-content mx-auto" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Motivo</th>
                                <th scope="col">Data ida</th>
                                <th scope="col">Data volta</th>
                                <th scope="col">Local</th>
                                <th scope="col">Medico</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Observação</th>
                                <th scope="col">Deletar</th>
                            </tr>
                        </thead>
                        <tbody id="informacoes">

                        </tbody>
                    </table>
                    <button class="btn btn-success btn-sm ml-2 mb-5" data-toggle="collapse" data-target="#collapseExample">Adicionar nova consulta</button>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            <div class="container">
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">Motivo</label>
                                            <input type="text" class="form-control" id="motivo_consulta" placeholder="...">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">Diagnostico</label>
                                            <input type="text" class="form-control" id="diagnostico_consulta" placeholder="...">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Data ida</label>
                                            <input type="date" class="form-control" id="data_ida_consulta" placeholder="14/05/2018">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Data volta</label>
                                            <input type="date" class="form-control" id="data_volta_consulta" placeholder="14/05/2018">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputAddress">Médico</label>
                                            <input type="text" class="form-control" id="medico_consulta" placeholder="...">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputAddress">valor</label>
                                            <input type="text" class="form-control" id="valor_consulta" placeholder="100,00">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputAddress2">Observação</label>
                                        <input type="text" class="form-control" id="obs_consulta" placeholder="...">
                                    </div>
                                </form>
                                <button type="submit" class="btn btn-primary" id="cadastraconsulta" onclick="cadastrarConsulta('minhaVariavel')">Cadastrar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">Data aplicação</th>
                                <th scope="col">Data reaplicação</th>
                                <th scope="col">Observação</th>
                                <th scope="col">Deletar</th>
                            </tr>
                        </thead>
                        <tbody id="vacina">

                        </tbody>
                    </table>
                    <button class="btn btn-success btn-sm ml-2 mb-5" data-toggle="collapse" data-target="#collapseExample2">Adicionar nova vacina</button>
                    <div class="collapse" id="collapseExample2">
                        <div class="card card-body">
                            <div class="container">
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label for="inputEmail4">Nome</label>
                                            <input type="text" class="form-control" id="nome_vacina" placeholder="nome">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Data aplicação</label>
                                            <input type="date" class="form-control" id="data_apliacao_vacina" placeholder="14/05/2018">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Data reaplicação</label>
                                            <input type="date" class="form-control" id="data_reapliacao_vacina" placeholder="14/05/2018">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputAddress2">Observação</label>
                                        <input type="text" class="form-control" id="obs_vacina" placeholder="...">
                                    </div>
                                </form>
                                <button type="submit" class="btn btn-primary" onclick="cadastrarVacina('minhaVariavel')" id="cadastrarvacina">Cadastrar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">Data</th>
                                <th scope="col">Local</th>
                                <th scope="col">Diagnóstico</th>
                                <th scope="col">Observação</th>
                                <th scope="col">Deletar</th>
                            </tr>
                        </thead>
                        <tbody id="exames">

                        </tbody>
                    </table>
                    <button class="btn btn-success btn-sm ml-2 mb-5" data-toggle="collapse" data-target="#collapseExample3">Adicionar novo exame</button>
                    <div class="collapse" id="collapseExample3">
                        <div class="card card-body">
                            <div class="container">
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label for="inputEmail4">Nome</label>
                                            <input type="text" class="form-control" id="nome_exame" placeholder="nome">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Data</label>
                                            <input type="date" class="form-control" id="data_exame" placeholder="15/02/2018">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Local</label>
                                            <input type="text" class="form-control" id="local_exame" placeholder="...">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label for="inputAddress">Diagnóstico</label>
                                            <input type="text" class="form-control" id="diagnostico_exame" placeholder="...">
                                        </div>
                                        <div class="form-group col-md-8">
                                            <label for="inputAddress">Observação</label>
                                            <input type="text" class="form-control" id="obs_exame" placeholder="...">
                                        </div>
                                    </div>
                                </form>
                                <button type="submit" class="btn btn-primary" id="cadastrarexame" onclick="cadastrarExame('minhaVariavel')">Cadastrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </center>
    <center>
        <p style="color:white">&copy - Todos os direitos reservados. MyPetLife 2018</p>
    </center>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="assets/js/vacinaconsultaexame.js"></script>
    <script src="assets/js/navbar.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
        crossorigin="anonymous"></script>



</body>

</html>