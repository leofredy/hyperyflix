# HYPERYFLIX
Neste projeto foi desenvolvida uma listagem de filmes em tendência, os dados dos filmes foram consumidos da [API TheMovie](https://developers.themoviedb.org/3/trending/get-trending).

## Instalando dependências.
```bash
npm install

versões das tecnologias usada no projeto:
node: v16.14.2
npm: 8.6.0
Vuejs 3
```

### Para iniciar o projeto local
```bash
npm run serve
```

### Páginas que compõem o projeto
```bash
 - Trend: lista de filmes em tendência. Essa página pode ser acessado por "/" ou "/trend" através de um redirect configurado no vue router.
 - NotFound: página de erro 404 quando navegado para uma rota não existente
```

### Features no projeto
```bash
 - Skeleton: a página de listagem contem uma skeleton para melhor experiência do usuário enquanto é carregado as requisições.
 - Listagem de filmes:
    - Paginação: com range de 5 páginas em desktop e 3 páginas no mobile, possui também botão de próxima página e botão para ultima página.
    - Tempo da tendência: possui um select para escolher qual o tempo da tendência que você quer visualizar, as opções são: semana ("week") ou dia ("day"). Essa feature é implementada em conjunto com o router através de para melhor navegabilidade no historico do usuário. 
 - Projeto mobile first: o projeto foi desenvolvido em mobile first para garantir uma melhor performance cumprindo a metrica CLS estabelecida pelo pagespeed.
 - Componentes sob demanda: o componente footer e a página NotFound foi importada sob demanda para garantir um menor consumo de banda para usuários mobile.
```

