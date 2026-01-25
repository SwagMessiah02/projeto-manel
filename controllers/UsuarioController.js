const UsuarioService = require("../services/UsuarioService");
const TokenService = require('../services/TokenService');
const {Usuario} = require('../models');

class UsuarioController {
    constructor() {
        this.usuarioService = new UsuarioService(Usuario);
        this.tokenService = new TokenService();
    }

    login = async (req, res) => {
        const {email, senha} = req.body;
        const usuario = await this.usuarioService.getUserByEmail({email, senha});

        const token = await this.tokenService.getAcessToken();

        console.log("Acess token from controller:", token);

        res.cookie("acess_token", token, {
            maxAge: 1000 * 60 * 60, 
            httpOnly: true,    
            secure: false,   
            sameSite: "lax"
        });

        res.status(200).json(usuario);
    }

    registro = async (req, res) => {
        const {nome, email, senha} = req.body;
        await this.usuarioService.createUser({nome, email, senha}); 

        res.status(201).json("Usuário criando com sucesso");
    }
}

module.exports = UsuarioController;