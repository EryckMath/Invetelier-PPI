const express = require('express');
const Sequelize = require('sequelize');
const sequelize = require('./config/database');
const { Usuario, InfoPedidos, CadastroCliente, AdicionarFuncionario } = require('./models/models');

const app = express();
app.use(express.json());

app.post('/submit', (req, res) => {
    Usuario.create(req.body)
        .then(usuario => res.json(usuario))
        .catch(error => res.json(error))
});

app.get('/users', (req, res) => {
    Usuario.findAll()
        .then(usuarios => res.json(usuarios))
        .catch(error => res.json(error))
});

app.put('/users/:id', (req, res) => {
    Usuario.findByPk(req.params.id)
        .then(usuario => {
            if (!usuario) {
                return res.status(404).json({error: 'O usuário não foi encontrado'});
            }
            return usuario.update(req.body);
        })
        .then(() => res.json({success: true}))
        .catch(error => res.json(error))
});

app.delete('/users/:id', (req, res) => {
    Usuario.findByPk(req.params.id)
        .then(usuario => {
            if (!usuario) {
                return res.status(404).json({error: 'O usuário não foi encontrado'});
            }
            return usuario.destroy();
        })
        .then(() => res.json({success: true}))
        .catch(error => res.json(error))
});

app.listen(3306, () => {
    console.log('Servidor na porta 3306');
});
