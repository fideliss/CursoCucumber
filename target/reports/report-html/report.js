$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("inserir_conta.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Cadastro de contas",
  "description": "Como um usuário\r\nGostaria de cadastrar contas\r\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "cadastro-de-contas",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@funcionais"
    }
  ]
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 29,
  "name": "adiciono a conta \"\u003cconta\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 30,
  "name": "recebo a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;",
  "rows": [
    {
      "cells": [
        "conta",
        "mensagem"
      ],
      "line": 33,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;1"
    },
    {
      "cells": [
        "Conta de Teste",
        "Conta adicionada com sucesso!"
      ],
      "line": 34,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;2"
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ],
      "line": 35,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;3"
    },
    {
      "cells": [
        "Conta de Teste",
        "Já existe uma conta com esse nome!"
      ],
      "line": 36,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "comments": [
    {
      "line": 8,
      "value": "#IMPERATIVO"
    },
    {
      "line": 9,
      "value": "#Background"
    },
    {
      "line": 10,
      "value": "#Contexto:"
    },
    {
      "line": 11,
      "value": "#  Dado que estou acessando a aplicacao"
    },
    {
      "line": 12,
      "value": "#  Quando informo o usuário \"t@t\""
    },
    {
      "line": 13,
      "value": "#  E a senha \"123456\""
    },
    {
      "line": 14,
      "value": "#  E seleciono entrar"
    },
    {
      "line": 15,
      "value": "#  Entao visualizo a pagina inicial"
    },
    {
      "line": 16,
      "value": "#  Quando seleciono Contas"
    },
    {
      "line": 17,
      "value": "#  E seleciono Adicionar"
    },
    {
      "line": 18,
      "value": "#"
    },
    {
      "line": 19,
      "value": "#Esquema do Cenario: Deve validar regras cadastro contas"
    },
    {
      "line": 20,
      "value": "#  Quando informo a conta \"\u003cconta\u003e\""
    },
    {
      "line": 21,
      "value": "#  E seleciono Salvar"
    },
    {
      "line": 22,
      "value": "#  Entao recebo a mensagem \"\u003cmensagem\u003e\""
    },
    {
      "line": 24,
      "value": "#DECLARATIVO"
    }
  ],
  "line": 25,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 26,
  "name": "que desejo adicionar uma conta",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.queDesejoAdicionarUmaConta()"
});
formatter.result({
  "duration": 5037462944,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "adiciono a conta \"Conta de Teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 30,
  "name": "recebo a mensagem \"Conta adicionada com sucesso!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta de Teste",
      "offset": 18
    }
  ],
  "location": "InserirContasSteps.adicionoAConta(String)"
});
formatter.result({
  "duration": 675686035,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta adicionada com sucesso!",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 34882812,
  "status": "passed"
});
formatter.after({
  "duration": 291591446,
  "status": "passed"
});
formatter.after({
  "duration": 666601472,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 8,
      "value": "#IMPERATIVO"
    },
    {
      "line": 9,
      "value": "#Background"
    },
    {
      "line": 10,
      "value": "#Contexto:"
    },
    {
      "line": 11,
      "value": "#  Dado que estou acessando a aplicacao"
    },
    {
      "line": 12,
      "value": "#  Quando informo o usuário \"t@t\""
    },
    {
      "line": 13,
      "value": "#  E a senha \"123456\""
    },
    {
      "line": 14,
      "value": "#  E seleciono entrar"
    },
    {
      "line": 15,
      "value": "#  Entao visualizo a pagina inicial"
    },
    {
      "line": 16,
      "value": "#  Quando seleciono Contas"
    },
    {
      "line": 17,
      "value": "#  E seleciono Adicionar"
    },
    {
      "line": 18,
      "value": "#"
    },
    {
      "line": 19,
      "value": "#Esquema do Cenario: Deve validar regras cadastro contas"
    },
    {
      "line": 20,
      "value": "#  Quando informo a conta \"\u003cconta\u003e\""
    },
    {
      "line": 21,
      "value": "#  E seleciono Salvar"
    },
    {
      "line": 22,
      "value": "#  Entao recebo a mensagem \"\u003cmensagem\u003e\""
    },
    {
      "line": 24,
      "value": "#DECLARATIVO"
    }
  ],
  "line": 25,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 26,
  "name": "que desejo adicionar uma conta",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.queDesejoAdicionarUmaConta()"
});
formatter.result({
  "duration": 5112276193,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "adiciono a conta \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 30,
  "name": "recebo a mensagem \"Informe o nome da conta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "InserirContasSteps.adicionoAConta(String)"
});
formatter.result({
  "duration": 354266229,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Informe o nome da conta",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 34899879,
  "status": "passed"
});
formatter.after({
  "duration": 237591286,
  "status": "passed"
});
formatter.after({
  "duration": 679402122,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 8,
      "value": "#IMPERATIVO"
    },
    {
      "line": 9,
      "value": "#Background"
    },
    {
      "line": 10,
      "value": "#Contexto:"
    },
    {
      "line": 11,
      "value": "#  Dado que estou acessando a aplicacao"
    },
    {
      "line": 12,
      "value": "#  Quando informo o usuário \"t@t\""
    },
    {
      "line": 13,
      "value": "#  E a senha \"123456\""
    },
    {
      "line": 14,
      "value": "#  E seleciono entrar"
    },
    {
      "line": 15,
      "value": "#  Entao visualizo a pagina inicial"
    },
    {
      "line": 16,
      "value": "#  Quando seleciono Contas"
    },
    {
      "line": 17,
      "value": "#  E seleciono Adicionar"
    },
    {
      "line": 18,
      "value": "#"
    },
    {
      "line": 19,
      "value": "#Esquema do Cenario: Deve validar regras cadastro contas"
    },
    {
      "line": 20,
      "value": "#  Quando informo a conta \"\u003cconta\u003e\""
    },
    {
      "line": 21,
      "value": "#  E seleciono Salvar"
    },
    {
      "line": 22,
      "value": "#  Entao recebo a mensagem \"\u003cmensagem\u003e\""
    },
    {
      "line": 24,
      "value": "#DECLARATIVO"
    }
  ],
  "line": 25,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 26,
  "name": "que desejo adicionar uma conta",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.queDesejoAdicionarUmaConta()"
});
formatter.result({
  "duration": 4523248325,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "adiciono a conta \"Conta de Teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 30,
  "name": "recebo a mensagem \"Já existe uma conta com esse nome!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta de Teste",
      "offset": 18
    }
  ],
  "location": "InserirContasSteps.adicionoAConta(String)"
});
formatter.result({
  "duration": 451775355,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Já existe uma conta com esse nome!",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 33197312,
  "status": "passed"
});
formatter.after({
  "duration": 224823403,
  "status": "passed"
});
formatter.after({
  "duration": 671327220,
  "status": "passed"
});
});