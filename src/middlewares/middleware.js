
let {
  banco,
  contas,
  saques,
  depositos,
  transferencias,
} = require("../bancodedados");

const validarSenhaBanco = async (req, res, next) => {
  try {
    const { senha_banco } = req.query;

    if (!senha_banco || senha_banco !== banco.senha) {
      return res
        .status(401)
        .json({ message: "A senha do banco informada é inválida!" });
    }

    next();
  } catch (error) {
    return res.status(500).json({ error: "erro interno no servidor" });
  }
};

module.exports = {
  validarSenhaBanco,
};
