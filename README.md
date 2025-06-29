# AVALIAÇÃO 2 - PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS

## Qual a diferença entre testes unitários e testes E2E (End to End) em aplicações mobile?

### TESTES UNITÁRIOS
Segundo a documentação oficial do React Native, os testem unitários testam estruturas muito pequenas, como por exemplo funções, botões, inputs e hooks. Esse tipo de teste visa **testar essas pequenas unidades a fim de garantir que sua lógica esteja correta e funcionando conforme o esperado**. Caso o objeto testado necessite de dados para funcionar (tenha dependências externas), devemos usar *mock data*, isto é, dados fictícios para realizar os testes.

### TESTES E2E (end-to-end)
Ainda de acordo com a documentação oficial do React Native, aqui o objetivo é **testar se a aplicação está funcionando (como um todo) corretamente em um aparelho (ou em um simulador/emulador), do ponto de vista do usuário**. Isso quer dizer que aqui testamos a interação do usuário com a aplicação, desde: *acessar a aplicação, interagir com componentes, formulários, navegar entre as páginas, userflow correto, interação com outros apps, etc*. Ele tem esse nome pois aqui o teste é feito de ponta a ponta - desde o front-end até o back-end com consultas à APIs e ao banco de dados. Com esse tipo de teste é possível ter uma visão geral do funcionamento da aplicação, tornando-se uma etapa fundamental para a tomada de decisões.

Portanto, a diferença entre eles é o escopo. Enquanto os testes unitários testam unidades isoladas, o teste E2E testa a aplicação como um todo.
