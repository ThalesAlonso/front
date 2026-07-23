# FrontPro Essencial

Projeto estático de uma jornada de venda para um curso digital de frontend.

O fluxo tem 3 páginas:

- `index.html`: página inicial do produto.
- `upsell.html`: oferta complementar.
- `obrigado.html`: confirmação da compra.

## Tecnologias

- HTML5.
- CSS3.
- JavaScript Vanilla.
- Sem framework JavaScript.

## Como Executar

Você precisa ter o Node.js instalado para usar o servidor local com `npx`.

Na raiz do projeto, rode:

```bash
npx serve . -l 3000
```

Depois abra no navegador:

```text
http://localhost:3000
```

Para parar o servidor, volte ao terminal e pressione:

```text
Ctrl + C
```

## Opção Sem Servidor

Como o projeto é estático, também dá para abrir o arquivo abaixo diretamente no navegador:

```text
index.html
```

Mesmo assim, a opção com `npx serve` é recomendada para testar de forma mais parecida com um deploy real.

## Deploy

O projeto está publicado em:

```text
https://thalesalonso.github.io/front/
```

## Como Testar O Fluxo

1. Abra `http://localhost:3000`.
2. Clique em `Comprar agora`.
3. Confira se abriu a página de oferta complementar.
4. Aguarde alguns segundos até a oferta completa aparecer.
5. Clique em `Aceitar oferta complementar`.
6. Confira se abriu a página de confirmação.

## Como Validar O Código

Rode estes comandos na raiz do projeto:

```bash
node --check assets/js/main.js
npx --yes html-validate index.html upsell.html obrigado.html
```

O primeiro comando valida a sintaxe do JavaScript.

O segundo valida a estrutura HTML das páginas.

## Checklist Visual

Ao testar no navegador, confira:

- A navegação entre as 3 páginas funciona.
- O carrossel responde aos botões.
- A oferta complementar aparece depois do tempo configurado.
- O layout funciona em celular, tablet e desktop.
- O foco do teclado fica visível ao usar `Tab`.

## Estrutura Do Projeto

```text
.
|-- index.html
|-- upsell.html
|-- obrigado.html
|-- README.md
|-- PLANO.md
|-- PLANO_V2.md
|-- assets
|   |-- css
|   |   `-- styles.css
|   |-- js
|   |   `-- main.js
|   `-- img
|       |-- hero.svg
|       |-- slide-01.svg
|       |-- slide-02.svg
|       `-- slide-03.svg
`-- LICENSE
```

## Lighthouse

Evidência da auditoria mobile:

![Resumo Lighthouse](assets/img/lighthouse-summary.svg)

Resultado registrado em 2026-07-23:

- Performance: 100.
- Accessibility: 96.
- Best Practices: 96.
- SEO: 100.

Relatório compartilhável pelo PageSpeed Insights:

```text
https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fthalesalonso.github.io%2Ffront%2F
```

Para gerar uma nova auditoria:

1. Abra o projeto no Chrome.
2. Abra o DevTools.
3. Entre na aba `Lighthouse`.
4. Escolha o modo `Mobile`.
5. Gere o relatório.
