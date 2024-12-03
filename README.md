# TUTORIALANGULAR

Este projeto é um exemplo de tutorial em Angular que demonstra a criação de componentes, módulos e a organização de um projeto Angular. 
Projeto desenvolvido com base nos requisitos informados pelo professor.

## Índice

- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Como Usar](#como-usar)
- [Editando Variáveis de Ambiente](#editando-variáveis-de-ambiente)
- [Servidor de Desenvolvimento](#servidor-de-desenvolvimento)
- [Geração de Código](#geração-de-código)
- [Build do Projeto](#build-do-projeto)
- [Testes Unitários](#testes-unitários)
- [Testes de ponta a ponta](#testes-de-ponta-a-ponta)
- [Ajuda Adicional](#ajuda-adicional)
- [Personalização](#personalização)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Autores](#autores)
- [Reconhecimentos](#reconhecimentos)

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```plaintext
TUTORIALANGULAR/
├── .angular/
├── node_modules/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── pagina2/
│   │   │   │   ├── pagina2.component.css
│   │   │   │   ├── pagina2.component.html
│   │   │   │   ├── pagina2.component.spec.ts
│   │   │   │   ├── pagina2.component.ts
│   │   ├── paginainicial/
│   │   │   │   ├── paginainicial.component.css
│   │   │   │   ├── paginainicial.component.html
│   │   │   │   ├── paginainicial.component.spec.ts
│   │   │   │   ├── paginainicial.component.ts
│   │   ├── services/
│   │   │   ├── data.service.ts
│   │   ├── modules/
│   │   │   ├── pagina2.module.ts
│   │   │   ├── paginainicial.module.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   ├── assets/
│   │   ├── images/
│   ├── environments/
│   │   ├── environment.prod.ts
│   │   ├── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   ├── test.ts
├── .browserslistrc
├── .editorconfig
├── .gitignore
├── angular.json
├── karma.conf.js
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
```

## Tecnologias Utilizadas

- **Angular**: Framework para construção de aplicações web.
- **TypeScript**: Superconjunto de JavaScript que adiciona tipagem estática.
- **HTML5**: Estruturação e conteúdo das páginas.
- **CSS3**: Estilização e layout responsivo do site.
- **Bootstrap 5**: Framework CSS para design responsivo e componentes de interface de usuário.
- **Google Fonts**: Fontes customizadas para uma estética moderna.

## Funcionalidades

- Criação e gerenciamento de componentes.
- Integração de serviços para manipulação de dados.
- Roteamento entre diferentes páginas.
- Layout responsivo e estilização com CSS e Bootstrap.

## Como Usar

Instruções passo a passo sobre como configurar e executar o projeto localmente.

```sh
# Clone este repositório
git clone https://github.com/usuario/projeto.git

# Entre no diretório do projeto
cd projeto

# Instale as dependências
npm install

# Execute o projeto
ng serve
```

## Editando Variáveis de Ambiente

### Caminho da Pasta

1. Na área de trabalho do Windows, clique no botão iniciar e digite "Explorador de Arquivos".
2. Clique em abrir e procure por Disco Local C:. Busque pela pasta Usuários e abra-a.
3. Procure pelo seu Usuário e então abra-o.
4. Dentro do Usuário, procure por AppData e abra.
5. Em seguida, abra a pasta Roaming.
6. Dentro de Roaming, busque pela pasta npm e abra.
7. Na barra superior, clique e copie o caminho das pastas: `C:\Users\Usuario\AppData\Roaming\npm`.
8. Volte para a área de trabalho.

### Adicionando Variável de Ambiente

1. Na área de trabalho do Windows, clique no iniciar e digite "Variáveis". Clique em "Editar variáveis de ambiente para sua conta".
2. Na janela que abrir, procure por Path na lista de variáveis para usuário, clique sobre ele e depois em Editar.
3. Em um espaço vazio, dê dois cliques e cole o caminho das pastas copiado anteriormente. Em seguida, clique em Ok.
4. Clique em Ok novamente para fechar a janela de variáveis de ambiente.

Com isso, sua variável foi criada. Você pode retornar ao tutorial de instalação do Angular clicando [aqui](#instalação-do-angular).

## Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento, execute `ng serve`. Navegue até `http://localhost:4200/`. O aplicativo recarregará automaticamente se você alterar qualquer um dos arquivos de origem.

## Geração de Código

Execute `ng generate component nome-do-componente` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build do Projeto

Execute `ng build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist/`.

## Testes Unitários

Execute `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io).

## Testes de ponta a ponta

Execute `ng e2e` para executar os testes de ponta a ponta via uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente capacidades de teste de ponta a ponta.

## Ajuda Adicional

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou consulte a [Visão Geral e Referência de Comandos do Angular CLI](https://angular.io/cli).

## Personalização

Para alterar as cores e o layout, edite os arquivos de estilos localizados em `src/app/components/*/*.css`.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## Autores

- **Erick Araujo** - _Trabalho inicial_ - [Seu GitHub](https://github.com/iErickAraujo)

## Reconhecimento

- Inspirações, agradecimentos especiais, etc.
