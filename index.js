import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionarios/Gerente.js";
import {Diretor} from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo",10000,123);
const gerente = new Gerente ("Ricardo",5000,123456);

diretor.cadastrarSenha(123);
const estaLogado = SistemaAutenticacao.login(diretor,123);

console.log(estaLogado);