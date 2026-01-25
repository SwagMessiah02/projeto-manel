const EmprestimoService = require('../services/EmprestimosService.js');
const AmigoService = require('../services/AmigoService.js');
const JogosService = require('../services/JogosService.js');
const { Amigo, Jogo, Emprestimo } = require('../models');

class EmprestimoController {
    constructor () {
        this.emprestimoService = new EmprestimoService(Emprestimo);
        this.amigoService = new AmigoService(Amigo);
        this.jogosService = new JogosService(Jogo);
    }

    // /emprestimos
    exibirEmprestimos = async (req, res) => {
        const emprestimos = await this.emprestimoService.getAllEmprestimos();

        res.render('emprestimos/index', { emprestimos });
    }

    // /emprestimos/novo
    exibirCriarEmprestimo = async (req, res) => {
        const jogos = await this.jogosService.getAllJogosOrderedByTitle();
        const amigos = await this.amigoService.getAllAmigosOrderedByName();
        res.render('emprestimos/novo', { jogos, amigos });
    }

    // /emprestimos/novo
    criarEmprestimo = async (req, res) => {
        const { jogoId, amigoId, dataInicio, dataFim } = req.body;
        await this.emprestimoService.createEmprestimo({
            jogoId: Number(jogoId),
            amigoId: Number(amigoId),
            dataInicio,
            dataFim: dataFim || null
        });

        res.redirect('/emprestimos');
    }

    // /emprestimos/excluir/:id
    excluirEmprestimo = async (req, res) => {
        await this.emprestimoService.excluirEmprestimo({ id: req.params.id });
        res.redirect('/emprestimos');
    }

    exibirJson = async (req, res) => {
        const data = await this.emprestimoService.getEmprestimosJson();

        return res.status(200).json(data);
    }
}

module.exports = EmprestimoController;