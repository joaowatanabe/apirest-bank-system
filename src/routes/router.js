const express = require("express");

const {
  criarContaBanco,
  listarContasBanco,
  atualizarContaBanco,
  deletarContaBanco,
} = require("../controllers/accountController");

const {
  depositarSaldo,
  sacarSaldo,
  transferirSaldo,
  consultarSaldo,
  consultarExtrato,
} = require("../controllers/dataController");

const { validarSenhaBanco } = require("../middlewares/middleware");

const rotas = express();

rotas.get("/contas", validarSenhaBanco, listarContasBanco);
rotas.post("/contas", criarContaBanco);
rotas.put("/contas/:numeroConta/usuario", atualizarContaBanco);
rotas.delete("/contas/:numeroConta", deletarContaBanco);

rotas.post("/transacoes/depositar", depositarSaldo);
rotas.post("/transacoes/sacar", sacarSaldo);
rotas.post("/transacoes/transferir", transferirSaldo);
rotas.get("/contas/saldo", consultarSaldo);
rotas.get("/contas/extrato", consultarExtrato);

module.exports = rotas;
