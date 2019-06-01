$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BuscaGoogle.feature");
formatter.feature({
  "line": 1,
  "name": "Busca",
  "description": "",
  "id": "busca",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Busca positiva",
  "description": "",
  "id": "busca;busca-positiva",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Acesso o site do Google no \u003cbrowser\u003e e digite  \u003ctermo\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Pressione Enter",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Exibe a pagina com o titulo \"dia da toalha - Pesquisa Google\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "busca;busca-positiva;",
  "rows": [
    {
      "cells": [
        "browser",
        "termo"
      ],
      "line": 8,
      "id": "busca;busca-positiva;;1"
    },
    {
      "cells": [
        "\"chrome\"",
        "\"dia da toalha\""
      ],
      "line": 9,
      "id": "busca;busca-positiva;;2"
    },
    {
      "cells": [
        "\"chrome\"",
        "\"dia da toalha\""
      ],
      "line": 10,
      "id": "busca;busca-positiva;;3"
    },
    {
      "cells": [
        "\"chrome\"",
        "\"dia da toalha\""
      ],
      "line": 11,
      "id": "busca;busca-positiva;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Busca positiva",
  "description": "",
  "id": "busca;busca-positiva;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Acesso o site do Google no \"chrome\" e digite  \"dia da toalha\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Pressione Enter",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Exibe a pagina com o titulo \"dia da toalha - Pesquisa Google\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 28
    },
    {
      "val": "dia da toalha",
      "offset": 47
    }
  ],
  "location": "BuscaGoogle.acesso_o_site_do_Google_no_e_digite(String,String)"
});
formatter.result({
  "duration": 14452371033,
  "status": "passed"
});
formatter.match({
  "location": "BuscaGoogle.pressione_Enter()"
});
formatter.result({
  "duration": 7704966935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dia da toalha - Pesquisa Google",
      "offset": 29
    }
  ],
  "location": "BuscaGoogle.exibe_a_pagina_com_o_titulo(String)"
});
formatter.result({
  "duration": 21939141,
  "status": "passed"
});
formatter.after({
  "duration": 5141676016,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Busca positiva",
  "description": "",
  "id": "busca;busca-positiva;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Acesso o site do Google no \"chrome\" e digite  \"dia da toalha\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Pressione Enter",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Exibe a pagina com o titulo \"dia da toalha - Pesquisa Google\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 28
    },
    {
      "val": "dia da toalha",
      "offset": 47
    }
  ],
  "location": "BuscaGoogle.acesso_o_site_do_Google_no_e_digite(String,String)"
});
formatter.result({
  "duration": 7524806681,
  "status": "passed"
});
formatter.match({
  "location": "BuscaGoogle.pressione_Enter()"
});
formatter.result({
  "duration": 5769799508,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dia da toalha - Pesquisa Google",
      "offset": 29
    }
  ],
  "location": "BuscaGoogle.exibe_a_pagina_com_o_titulo(String)"
});
formatter.result({
  "duration": 10503039,
  "status": "passed"
});
formatter.after({
  "duration": 1048857580,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Busca positiva",
  "description": "",
  "id": "busca;busca-positiva;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Acesso o site do Google no \"chrome\" e digite  \"dia da toalha\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Pressione Enter",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Exibe a pagina com o titulo \"dia da toalha - Pesquisa Google\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 28
    },
    {
      "val": "dia da toalha",
      "offset": 47
    }
  ],
  "location": "BuscaGoogle.acesso_o_site_do_Google_no_e_digite(String,String)"
});
formatter.result({
  "duration": 10895333512,
  "status": "passed"
});
formatter.match({
  "location": "BuscaGoogle.pressione_Enter()"
});
formatter.result({
  "duration": 5371518679,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dia da toalha - Pesquisa Google",
      "offset": 29
    }
  ],
  "location": "BuscaGoogle.exibe_a_pagina_com_o_titulo(String)"
});
formatter.result({
  "duration": 13810751,
  "status": "passed"
});
formatter.after({
  "duration": 1102210196,
  "status": "passed"
});
});