const JogosService = require('../services/JogosService.js');
const AmigoService = require('../services/AmigoService.js');
const {Amigo} = require('../models');
const {Jogo} = require('../models');

class JogosController {
    constructor () {
        this.jogoService = new JogosService(Jogo);
        this.amigoService = new AmigoService(Amigo);
    }

    // /jogos
    exibirJogos = async (req, res) => {
        const jogos = await this.jogoService.getAllJogos()

        res.render('jogos/index', { jogos });
    }

    // /jogos/novo
    exibirListaDeAmigos = async (req, res) => {
        const amigos = await this.amigoService.getAllAmigosOrderedByName();

        res.render('jogos/novo', { amigos });
    }

    // /jogos/novo
    adicionarJogo = async (req, res) => {
        const { titulo, plataforma, amigoId } = req.body;
        await this.jogoService.createJogo({ titulo, plataforma, amigoId: Number(amigoId) });

        res.redirect('/jogos');
    }

    // /jogos/editar/:id
    exibirEditarJogo = async (req, res) => {
        const jogo = await this.jogoService.getJogoById(req.params.id);
        if (!jogo) return res.status(404).send('Jogo não encontrado.');
        const amigos = await this.amigoService.getAllAmigosOrderedByName();
        res.render('jogos/editar', { jogo, amigos });
    }

    // /jogos/editar/:id
    editarJogo = async (req, res) => {
        const { titulo, plataforma, amigoId } = req.body;
        await this.jogoService.updateJogo({ titulo, plataforma, amigoId: Number(amigoId) }, {
            where: { id: req.params.id }
        });
        res.redirect('/jogos');
    }

    // /jogos/excluir/:id
    excluirJogo = async (req, res) => {
        await this.jogoService.deleteJogo({ id: req.params.id });
        res.redirect('/jogos');
    }

    // jogos/json
    exibirJson = async (req,res) => {
        const data = await this.jogoService.getJogosJson();

        res.status(200).json(data);
    }
}

module.exports = JogosController;