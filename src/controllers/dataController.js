
let {
  banco,
  contas,
  saques,
  depositos,
  transferencias,
} = require("../bancodedados");

const depositarSaldo = async (req, res) => {
  try {
    const { numero_conta, valor } = req.body;

    const conta = contas.find((conta) => {
      return Number(conta.numero) === Number(numero_conta);
    });

    if (!Number(numero_conta) || !valor) {
      return res
        .status(400)
        .json({ message: "O numero da conta e valor são obrigatórios" });
    }

    if (!conta) {
      return res.status(404).json({ message: "Conta não encontrada" });
    }

    if (isNaN(valor) || valor <= 0) {
      return res
        .status(400)
        .json({ message: "Valor deve ser um número maior que zero" });
    }

    conta.saldo += valor;

    const valorReais = (valor / 100).toFixed(2)

    const dataDeposito = new Date();
    const dataFormatada = dataDeposito.toLocaleString();

    const deposito = {
      data: dataFormatada,
      numero_conta,
      valor: `R$${valorReais}`,
    };

    depositos.push(deposito);

  } catch (error) {
    return res.status(500).json({ error: "erro interno no servidor" });
  }
};

const sacarSaldo = async (req, res) => {
  try {
    const { numero_conta, valor, senha } = req.body
    
    if (!numero_conta || !valor || !senha) {
      return res.status(404).json({ message: "Número da conta, valor e senha são obrigatórios" })
    }

    const conta = contas.find((conta) => {
      return Number(conta.numero) === Number(numero_conta)
    })

    if (!conta) {
      return res.status(404).json({ message: "Conta não encontrada!" })
    }

    if (conta.usuario.senha !== senha) {
      return res.status(400).json({ message: "Senha inválida!" })
    }

    if (valor > conta.saldo) {
      return res.status(400).json({ message: "Saldo insuficiente." })
    }

    conta.saldo -= valor;

    const valorReais = (valor / 100).toFixed(2)

    const data = new Date();
    const dataFormatada = data.toLocaleString();

    const saque = {
      data: dataFormatada,
      numero_conta,
      valor: `R$${valorReais}`,
    }

    saques.push(saque);

    return res.status(201)

  } catch (error) {
    return res.status(500).json({ error: "erro interno no servidor" });
  }
};

const transferirSaldo = async (req, res) => {
  try {
    const { 
      numero_conta_origem, 
      numero_conta_destino,
      valor, 
      senha
    } = req.body

    if (!numero_conta_origem || !numero_conta_destino || !valor || !senha) {
      return res.status(404).json({
        message: "Números de conta do depositante e beneficiário, valor e senha são obrigatórios"
      })
    }

    const contaOrigem = contas.find((conta) => {
      return Number(conta.numero) === Number(numero_conta_origem)
    })

    const contaDestino = contas.find((conta) => {
      return Number(conta.numero) === Number(numero_conta_destino)
    })

    if (!contaOrigem) {
      return res.status(404).json({ message: "Conta do depositante não encontrada" })
    }

    if (!contaDestino) {
      return res.status(404).json({ message: "Conta do beneficiário não encontrada" })
    }

    if (contaOrigem.usuario.senha !== senha) {
      return res.status(400).json({ message: "Senha inválida" })
    }

    if (valor >  contaOrigem.saldo) {
      return res.status(400).json({
        message: "Saldo insuficiente."
      })
    }

    contaOrigem.saldo -= valor;
    contaDestino.saldo += valor;

    const valorReais = (valor / 100).toFixed(2)

    const data = new Date();
    const dataFormatada = data.toLocaleString();

    const transferencia = {
      data: dataFormatada,
      numero_conta_origem,
      numero_conta_destino,
      valor: `R$${valorReais}`,
    }

    transferencias.push(transferencia)

    return res.status(201)

  } catch (error) {
    return res.status(500).json({ error: "erro interno no servidor" });
  }
};

const consultarSaldo = async (req, res) => {
  try {
    const { numero_conta, senha} = req.query

    if (!numero_conta || !senha) {
      return res.status(404).json({
        message: "Número da conta e senha são obrigatórios"
      })
    }

    const conta = contas.find((conta) => {
      return Number(conta.numero) === Number(numero_conta)
    })

    if (!conta) {
      return res.status(404).json({ message: "Conta não encontrada" })
    }

    if (conta.usuario.senha !== senha) {
      return res.status(400).json({ message: "Senha inválida" })
    }

    const saldo_conta = {
      saldo: `R$${(conta.saldo / 100).toFixed(2)}`,
    }

    return res.status(200).json(saldo_conta)

  } catch (error) {
    return res.status(500).json({ error: "erro interno no servidor" });
  }
};

const consultarExtrato = async (req, res) => {
  try {
    const { numero_conta, senha } = req.query

    if (!numero_conta || !senha) {
      return res.status(404).json({
        message: "Número da conta e senha são obrigatórios"
      })
    }

    const conta = contas.find((conta) => {
      return Number(conta.numero) === Number(numero_conta)
    })

    if (!conta) {
      return res.status(404).json({ message: "Conta não encontrada" })
    }

    if (conta.usuario.senha !== senha) {
      return res.status(400).json({ message: "Senha inválida" })
    }

    const depositosConta = depositos.filter((deposito) => {
      return Number(deposito.numero_conta) === Number(numero_conta)
    })

    const saquesConta = saques.filter((saque) => {
      return Number(saque.numero_conta) === Number(numero_conta)
    })

    const trasnferenciasRealizadas = transferencias.filter((transferencia) => {
      return Number(transferencia.numero_conta_origem) === Number(numero_conta)
    })

    const trasnferenciasRecebidas = transferencias.filter((transferencia) => {
      return Number(transferencia.numero_conta_destino) === Number(numero_conta)
    })

    const extrato = {
      depositos: depositosConta,
      saques: saquesConta,
      trasnferenciasRealizadas,
      trasnferenciasRecebidas
    }

    return res.status(200).json(extrato);

  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: "erro interno no servidor" });
  }
};

module.exports = {
  depositarSaldo,
  sacarSaldo,
  transferirSaldo,
  consultarSaldo,
  consultarExtrato,
};
