
let {
  banco,
  contas,
  saques,
  depositos,
  transferencias,
} = require("../bancodedados");

let id = 1;

const saldoParaReais = (centavos) => {
  return (centavos / 100).toFixed(2)
}

const criarContaBanco = async (req, res) => {
  try {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
      return res
        .status(400)
        .json({ mensagem: "Todos os campos são obrigatórios!" });
    }

    const verificaCPF = contas.find((conta) => conta.usuario.cpf === cpf);
    if (verificaCPF) {
      return res.status(400).json({ mensagem: "CPF ja cadastrado" });
    }

    const verificaEmail = contas.find((conta) => conta.usuario.email === email);
    if (verificaEmail) {
      return res.status(400).json({ mensagem: "Email ja cadastrado" });
    }

    const novaConta = {
      numero: id++,
      saldo: 0,
      usuario: {
        nome,
        cpf,
        data_nascimento,
        telefone,
        email,
        senha,
      },
    };

    contas.push(novaConta);

    return res.status(201);
  } catch (error) {
    return res.status(500).json({ error: "erro interno no servidor" });
  }
};

const listarContasBanco = async (req, res) => {
  try {
    if (contas.length === 0) {
      return res.status(201).json({ message: "Nenhuma conta cadastrada" });
    }

    const contasComSaldoEmReais = contas.map((conta) => ({
      ...conta,
      saldo: saldoParaReais(conta.saldo),
  }))

    return res.status(200).json(contasComSaldoEmReais);
  } catch (error) {
    return res.status(500).json({ error: "erro interno no servidor" });
  }
};

const atualizarContaBanco = async (req, res) => {
  try {
    const { numeroConta } = req.params;
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    const conta = contas.find((conta) => conta.numero === Number(numeroConta));

    if (!conta) {
      return res.status(404).json({ message: "Conta não encontrada" });
    }

    if (!nome && !cpf && !data_nascimento && !telefone && !email && !senha) {
      return res
        .status(404)
        .json({ message: "Nenhum dado para atualizar foi enviado!" });
    }

    const verificaCPF = contas.find((conta) => conta.usuario.cpf === cpf);
    if (verificaCPF) {
      return res.status(400).json({ mensagem: "CPF ja cadastrado" });
    }

    const verificaEmail = contas.find((conta) => conta.usuario.email === email);
    if (verificaEmail) {
      return res.status(400).json({ mensagem: "Email ja cadastrado" });
    }

    if (nome) conta.usuario.nome = nome;
    if (cpf) conta.usuario.cpf = cpf;
    if (data_nascimento) conta.usuario.data_nascimento = data_nascimento;
    if (telefone) conta.usuario.telefone = telefone;
    if (email) conta.usuario.email = email;
    if (senha) conta.usuario.senha = senha;

    return res.status(204);
  } catch (error) {
    return res.status(500).json({ error: "erro interno no servidor" });
  }
};

const deletarContaBanco = async (req, res) => {
  try {
    const { numeroConta } = req.params;

    const indexConta = contas.findIndex((conta) => {
      return Number(conta.numero) === Number(numeroConta);
    });

    if (indexConta === -1) {
      return res.status(404).json({ message: "Conta não encontrada" });
    }

    if (contas[indexConta].saldo !== 0) {
      return res.status(400).json({
        message: "A conta ainda possui saldo, portando não é permitido excluir",
      });
    }

    contas.splice(indexConta, 1);

    return res.status(204);
  } catch (error) {
    return res.status(500).json({ error: "erro interno no servidor" });
  }
};

module.exports = {
  criarContaBanco,
  listarContasBanco,
  atualizarContaBanco,
  deletarContaBanco,
};
