# ProjetoIntegrado2022.2

## Objetivo e Tecnologias
Esse trabalho tem como o objetivo fazer um site para o projeto final da disciplina de Projeto Integrado cursada na UFRJ. Para o frontend foi usado o JavaScript usando o ReactJS e para a API do backend foi utilizado o Python utilizando o framework Django. Nossa ideia foi fazer um controle de fluxo de caixa d'água e cisterna. Quando a caixa d'água ficasse abaixo de 20%, um Arduino envia o comando para a bomba da cisterna encher a caixa e, quando a cisterna estiver abaixo de 20%, a bomba desliga por questões de segurança, como queimar a bomba por falta de água.

## Funcionalidades FrontEnd
No frontend da aplicação temos dois espaços para ver os níveis da caixa e da cisterna (em porcentagem) e, abaixo disso, temos um gráfico do último dia com duas linhas, uma da caixa d'água e outra da cisterna, ambas no mesmo gráfico para ter uma visualização mais fácil.

## Funcionalidades BackEnd
No nosso backend foi desenvolvida uma API usando o Django Rest Framework para auxílio, ela possui um endpoint único, que possui um método POST para adicionar um dado novo da cisterna e da caixa d'água e outro método GET para buscar todos os dados cadastrados das últimas 24 horas.
<br>
<br>
Como temos o problema do CORS, utilizamos o pacote `django-cors-headers`, como é somente uma API para o projeto, usamos o comando `CORS_ALLOW_ALL_ORIGINS = True` para autorizar todos as urls que solicitam acesso a API para facilitar, porém é sabido que isso é uma má prática pois dificulta a segurança da API.
