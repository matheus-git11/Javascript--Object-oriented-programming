
export class SistemaAutenticacao {

  static login(autenticavel, senha) {
    if (SistemaAutenticacao.Autentic(autenticavel)) {
      return autenticavel.autenticar(senha);
    }
    return false;
  }

  static Autentic(autenticavel) {
    return "autenticar" in autenticavel 
    && autenticavel.autenticar instanceof Function;
  }

} 