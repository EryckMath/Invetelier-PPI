const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('usuario', {
    nome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    cnpj_cpf: {
        type: Sequelize.INTEGER
    },
    nome_empresa: {
        type: Sequelize.STRING
    },
    servico_entrega: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.INTEGER
    },
    tipo_endereco: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    },
    cidade: {
        type: Sequelize.STRING
    },
    estado: {
        type: Sequelize.STRING
    }
});

const CadastroCliente = sequelize.define('cadastroCliente', {
    nome: {
        type: Sequelize.STRING
    },
    data_pedido: {
        type: Sequelize.DATE
    },
    telefone: {
        type: Sequelize.INTEGER
    },
    rua: {
        type: Sequelize.STRING
    },
    numero: {
        type: Sequelize.INTEGER
    },
    bairro: {
        type: Sequelize.STRING
    },
    cidade: {
        type: Sequelize.STRING
    }
});

const InfoPedidos = sequelize.define('infoPedidos', {
    tipo_pedido: {
        type: Sequelize.STRING
    },
    busto: {
        type: Sequelize.STRING
    },
    cintura: {
        type: Sequelize.STRING
    },
    quadril: {
        type: Sequelize.STRING
    },
    ombro: {
        type: Sequelize.STRING
    },
    comprimento1: {
        type: Sequelize.STRING
    },
    comprimento2: {
        type: Sequelize.STRING
    },
    comprimento3: {
        type: Sequelize.STRING
    },
    comprimento4: {
        type: Sequelize.STRING
    },
    data_entrega: {
        type: Sequelize.DATE
    },
    client_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'cadastroCliente',
            key: 'id'
        }
    }
});

const AdicionarFuncionario = sequelize.define('adicionarFuncionario', {
    nome: {
        type: Sequelize.STRING
    },
    data_nascimento: {
        type: Sequelize.DATE
    },
    rg: {
        type: Sequelize.STRING
    },
    cpf: {
        type: Sequelize.INTEGER
    },
    numero_pis: {
        type: Sequelize.INTEGER
    },
    telefone: {
        type: Sequelize.INTEGER
    },
    cep: {
        type: Sequelize.INTEGER
    },
    endereco: {
        type: Sequelize.STRING
    },
    cidade: {
        type: Sequelize.STRING
    },
    estado: {
        type: Sequelize.STRING
    },
    senha_funcionario: {
        type: Sequelize.VARCHAR
    }
});

module.exports = {
    Usuario,
    InfoPedidos,
    CadastroCliente,
    AdicionarFuncionario
}

console.log("As tabelas foram criadas com êxito!");
}).catch ((erro) => {
    console.log("Erro ao criar tabelas: " + erro);
};);

