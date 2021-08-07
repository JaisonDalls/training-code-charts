## Breve Introdução

Este documento surgiu depois que tive um desafio na empresa que prestava serviços no front, onde o interesse era inserir um gráfico de mapeamento de acessos de usuários em uma determinada área geográfica.

A princípio a ideia era capturar os acessos de clientes de um portal na região do Brasil, por meio de um simples código usando o geolocation fornecido pelo próprío equipamento do usuário.

Depois de muitas pesquisas cheguei a esse site [ED RODRIGUES](https://edrodrigues.com.br/blog/criando-a-visualizacao-de-dados-de-mapas-de-choropleth-usando-javascript-no-covid-19-stats/) em que há um passo-a-passo bem legal que pode facilmente ser entendido.

## Recomendações usadas no projeto.

Durante a leitura do tutorial foi recomendado baixar os módulos via [CDN](https://www.anychart.com/download/cdn/?v=8.10.0):

    .1 Bibliotecas
        - [AnyMap](https://www.anychart.com/products/anymap/overview/) do AnyChart = projetada especificamente para produzir mapas. Essa biblioteca é leve, simples e fácil de começar. Possui uma vasta [documentação](https://docs.anychart.com/Maps/Quick_Start).
        - [Proj4.js](https://github.com/proj4js/proj4js/) = é uma biblioteca JAvaScript para transformar coordenadas de ponto de um sistema de coordenadas para outro, incluindo transformações de datum.
    
    2. Módulos
        - [Core](https://cdn.anychart.com/releases/8.7.1/js/anychart-core.min.js) = módulo básico necessário para usar qualquer outro módulo.
        - [Mapas geográficos](https://cdn.anychart.com/releases/8.7.1/js/anychart-map.min.js) = contém as informações necessárias para criar gráficos de mapas geográficos.
        - [Dados geográficos](https://cdn.anychart.com/releases/8.7.1/geodata/custom/world/world.js) = contém informações sobre as localizações geográficas.

    3. Arquivo JSON com os dados
        - Para obter os dados segui este [link](), copiei e salvei num arquivo no meu diretório do projeto que chamei de **data-covid.json**.