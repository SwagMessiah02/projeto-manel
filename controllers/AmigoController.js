const AmigoService = require('../services/AmigoService.js');
const {Amigo} = require('../models');

class AmigoController {
    constructor () {
        this.amigoService = new AmigoService(Amigo);
    }

    // /amigos
    exibirAmigos = async (req, res) => {
        const amigos = await this.amigoService.getAllAmigos();
        res.render('amigos/index', { amigos });
    }

    // /amigos/novo
    exibirAdicionarAmigos = async (req, res) => res.render('amigos/novo');

    // /amigos/novo
    adicionarAmigos = async (req, res) => {
        if(!req.body) {
            console.log("Conteudo: " + req.body);
        } else {
            console.log(req.body);
        }

        const { nome, email } = req.body;
        await this.amigoService.createAmigo({nome, email})
        res.redirect('/amigos');
    }

    // /amigos/editar/:id
    exibirEditarAmigo = async (req, res) => {
        console.log(req.params.id);
        const amigo = await this.amigoService.getAmigoById(req.params.id);
        if (!amigo) return res.status(404).send('Amigo não encontrado.');
        res.render('amigos/editar', { amigo });
    }

    // /amigos/editar/:id
    editarAmigo = async (req, res) => {
        const { nome, email } = req.body;
        await this.amigoService.updateAmigo({ nome, email }, { where: { id: req.params.id } });
        res.redirect('/amigos');
    }

    // /amigos/excluir/:id
    excluirAmigos = async (req, res) => {
        await this.amigoService.deleteAmigo({ id: req.params.id });
        res.redirect('/amigos');
    }

    exibirJson = async (req,res) => {
        const data = await this.amigoService.getAmigosJson();

        res.status(200).json(data);
    } 
}

module.exports = AmigoController;