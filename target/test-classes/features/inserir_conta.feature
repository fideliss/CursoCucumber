#language: pt
@funcionais
Funcionalidade: Cadastro de contas
  Como um usuário
  Gostaria de cadastrar contas
  Para que eu possa distribuir meu dinheiro de uma forma mais organizada

#IMPERATIVO
#Background
#Contexto:
#  Dado que estou acessando a aplicacao
#  Quando informo o usuário "t@t"
#  E a senha "123456"
#  E seleciono entrar
#  Entao visualizo a pagina inicial
#  Quando seleciono Contas
#  E seleciono Adicionar
#
#Esquema do Cenario: Deve validar regras cadastro contas
#  Quando informo a conta "<conta>"
#  E seleciono Salvar
#  Entao recebo a mensagem "<mensagem>"

#DECLARATIVO
Contexto:
  Dado que desejo adicionar uma conta

Esquema do Cenario: Deve validar regras cadastro contas
  Quando adiciono a conta "<conta>"
  Entao recebo a mensagem "<mensagem>"

Exemplos:
  | conta          | mensagem                           |
  | Conta de Teste | Conta adicionada com sucesso!      |
  |                | Informe o nome da conta            |
  | Conta de Teste | Já existe uma conta com esse nome! |