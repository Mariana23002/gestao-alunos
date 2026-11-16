// js/componentes.js
class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="app-header">
        <img src="img/logotipo.png" alt="Logotipo ChessAcademy" class="logo-img">
      </header>
    `;
  }
}

class AppNav extends HTMLElement {
  connectedCallback() {
    const paginaAtual = window.location.pathname.split("/").pop() || "index.html";

    const links = [
      { href: "index.html", texto: "Cadastrar" },
      { href: "consultar.html", texto: "Consultar" },
      { href: "alterar.html", texto: "Alterar" },
      { href: "deletar.html", texto: "Excluir" }
    ];

    const itensMenu = links
      .map(link => {
        const ativo = paginaAtual === link.href ? 'class="active"' : "";
        return `<a href="${link.href}" ${ativo}>${link.texto}</a>`;
      })
      .join("");

    this.innerHTML = `
      <nav class="app-nav" aria-label="Navegação principal">
        ${itensMenu}
      </nav>
    `;
  }
}

class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="app-footer">
        <p>&copy; ${new Date().getFullYear()} ChessAcademy &middot; Sistema de Gestão de Alunos</p>
      </footer>
    `;
  }
}

customElements.define("app-header", AppHeader);
customElements.define("app-nav", AppNav);
customElements.define("app-footer", AppFooter);
