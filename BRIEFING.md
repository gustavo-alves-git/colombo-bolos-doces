# Briefing - Colombo Bolos & Doces

## Sobre o Projeto

Landing page para a confeitaria **Colombo Bolos & Doces**, um negócio artesanal de bolos e doces sob encomenda.

## Identidade Visual

- **Nome:** Colombo Bolos & Doces
- **Slogan:** "Feito com amor"
- **Instagram:** @bolos_colombo
- **Estilo:** Delicado, artesanal, acolhedor, romântico
- **Elementos visuais:** Fouet (batedor), corações, flores decorativas

### Paleta de Cores

Tons de azul-lavanda (periwinkle), mantendo suavidade e delicadeza:

- Fundo: `#f5f7fc` → `#e8edf8` → `#dfe6f5` (gradiente)
- Texto principal: `#3a4565`
- Texto secundário: `#5b6a8a`
- Destaques: `#6a7fa0`, `#7088bb`
- Seção escura (contato/footer): `#4e5d7d`, `#3a4a6c`, `#313d55`
- Bordas e detalhes suaves: `#c4cfe8`, `#a8b8dc`

## Estrutura da Landing Page

1. **Header** - Link para Instagram
2. **Hero** - Logo estilizado, título, descrição, botão CTA para WhatsApp
3. **Nossa História** - Texto institucional sobre a confeitaria
4. **Nossos Produtos** - Grid com categorias (Bolos Decorados, Bolos Caseiros, Doces Finos, Tortas)
5. **Galeria** - Placeholders para fotos dos produtos (6 itens)
6. **Contato** - Botão WhatsApp, região de atendimento, link Instagram
7. **Footer** - Logo, slogan, copyright

## Configurações Pendentes

No início do código há um objeto `config` que precisa ser preenchido:

```javascript
const config = {
  whatsapp: "5541999999999", // Número real com código do país e DDD
  regiao: "Curitiba e Região Metropolitana", // Região de atendimento
  instagram: "bolos_colombo",
  mensagemWhatsapp: "Olá! Vi o site da Colombo Bolos & Doces e gostaria de fazer uma encomenda! 🍰"
};
```

## Stack Técnica

- React (Vite)
- CSS-in-JS (estilos inline)
- Deploy: GitHub Pages

## Repositório

- GitHub: colombo-bolos-doces
- Visibilidade: Público

## Próximos Passos

1. Configurar projeto Vite
2. Adicionar o componente da landing page
3. Preencher dados reais (WhatsApp, região)
4. Adicionar fotos reais dos produtos na galeria
5. Configurar deploy no GitHub Pages

## Observações

- A dona da confeitaria estava trabalhando como professora e iniciou o negócio recentemente
- Atualmente divulga apenas pelo Instagram
- O site deve servir como link na bio do Instagram
- Foco em facilitar o contato via WhatsApp para encomendas
