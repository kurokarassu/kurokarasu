# Kuro Karasu (黒烏) - Aulas Particulares de Japonês

Site oficial para apresentação de aulas particulares de japonês com metodologia de imersão em conteúdos nativos (animes, mangás, literatura e jogos), baralhos personalizados no Anki e acompanhamento individualizado.

---

## 🚀 Como Hospedar Grátis no GitHub Pages (Passo a Passo)

Este projeto já está **100% preparado** com:
- Caminhos de assets relativos (`base: './'`), funcionando em qualquer nome de repositório (ex: `seunome.github.io/kuro-karasu` ou `seunome.github.io`).
- Workflow automatizado do GitHub Actions configurado em `.github/workflows/deploy.yml`.

### Opção 1: Automático via GitHub Actions (Recomendado)

1. Crie um repositório no seu GitHub (pode ser público ou privado com Pages habilitado).
2. Suba o código para o GitHub:
   ```bash
   git init
   git add .
   git commit -m "Site Kuro Karasu"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   git push -u origin main
   ```
3. No seu repositório no GitHub, clique em **Settings** > **Pages** (no menu lateral esquerdo).
4. Em **Build and deployment** > **Source**, selecione:
   👉 **GitHub Actions**
5. Pronto! O GitHub vai compilar e colocar o site no ar automaticamente em menos de 1 minuto em:
   `https://SEU_USUARIO.github.io/SEU_REPOSITORIO/`

---

### Opção 2: Build Manual (Se preferir subir a pasta `dist`)

1. Compile o projeto no seu computador:
   ```bash
   npm install
   npm run build
   ```
2. A pasta `dist` gerada contém todo o site estático pronto (HTML, JS, CSS e imagens).
3. Você pode subir o conteúdo da pasta `dist` direto na branch `gh-pages` ou arrastar no GitHub.

---

## 🛠️ Comandos de Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Rodar servidor local de teste
npm run dev

# Gerar versão de produção
npm run build
```
