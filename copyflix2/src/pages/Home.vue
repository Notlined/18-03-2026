<template>


  <div class="hero-content">
    <h2>CRIAR CONTA</h2>
    <form @submit.prevent="criarUsuario" class="form-container">
      <div class="input-group">
        <label for="email">Email</label>
        <input v-model="email" type="email" id="email" name="email" placeholder="digite seu email" required>
      </div>

      <div class="input-group">
        <label for="nome">nome</label>
        <input v-model="nome" type="text" id="nome" name="nome" placeholder="digite seu nome" >
      </div>

      <div class="input-group">
        <label for="senha">senha</label>
        <input v-model="senha" type="password" id="senha" name="senha" placeholder="digite sua senha" required>
      </div>
      <div class="input-group">
        <label for="confirmarsenha">confirmar senha</label>
        <input v-model="confirmarSenha" type="password" id="confirmarsenha" name="confirmarsenha"
          placeholder="confirme sua senha" required>
      </div>

      <button type="submit">Criar Conta</button>
    </form>
    <table class="table-container">
      <tr>
        <th>Já tem uma conta?</th>
        <td><a href="/screens/login/index.html">Faça login</a></td>
      </tr>
    </table>


  </div>

  <header class="top-nav">
    <div class="nav-left">
      <div class="logo">COPYFLIX</div>
      <nav class="main-menu">
        <a href="/" class="active">Início</a>
        <a href="./screens/conta/index.html">Conta</a>
        <a href="./screens/perfil/index.html">Perfil</a>
        <a href="./screens/Filmes/index.html">Filmes</a>
        <a href="./screens/Bombando/index.html">Bombando</a>
        <a href="./screens/MinhaLista/index.html">Minha lista</a>
      </nav>
    </div>
    <div class="nav-right">
      <button class="icon-button" aria-label="Buscar">
        🔍
      </button>
      <button class="icon-button" aria-label="Notificações">
        🔔
      </button>
      <a class="profile" href="/screens/login/index.html"> <img class="profile"
          src="https://avatars.githubusercontent.com/u/243793905?v=4&size=64" alt="perfil"></a>
    </div>
  </header>


  <main>
    <!-- Seção de destaque / herói -->
    <section id="hero" class="hero">
      <div class="hero-background" id="hero-background">
        <!-- imagem de fundo via CSS/JS -->
      </div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 id="hero-title" class="hero-title">{{ tituloEmDestaque }}</h1>
        <p id="hero-overview" class="hero-overview">
          {{ sinopseDoFilmeEmDestaque }}
        </p>
        <div class="hero-actions">
          <button class="btn btn-primary">
            ▶ Assistir
          </button>
          <button class="btn btn-secondary">
            ⓘ Mais informações
          </button>
        </div>
        <div class="hero-pagination" id="hero-pagination">
          <!-- bolinhas do carrossel de destaque (preenchidas via JS) -->
        </div>
      </div>
    </section>

    <!-- Listas horizontais -->
    <section class="rows">
      <h1>Filmes em destaque</h1>
      <div class="row">
        <div class="card" v-for="filme in filmes" :key="filme.id">
          <img :src="`https://image.tmdb.org/t/p/w500${filme.poster_path}`" :alt="filme.name">
          <div class="card-title">
            {{ filme.name }}</div>
        </div>
      </div>


    </section>
  </main>

  <footer class="footer">
    <p>Clone simples da página inicial da Netflix para estudos.</p>
  </footer>


</template>

<script>

import { normalizeClass } from "vue";
import { api, cfg } from "../services/api";

import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      nome: "",
      email: "",
      senha: "",
      confirmarSenha: ""
    };
  },

  mounted() {

  },
  methods: {
    criarUsuario() {
      console.log(this.nome, this.email, this.senha, this.confirmarSenha);
      if (this.senha === '') {
        alert("A senha é obrigatória!");
        return;
      }
      if (this.confirmarSenha === '') {
        alert("A confirmação de senha é obrigatória!");
        return;
      }
      if (this.email === '') {
        alert("O email é obrigatório!");
        return;
      }
      if (this.nome === '') {
        alert("O nome é obrigatório!");
        return;
      }
      if (this.senha.length < 6) {
        alert("A senha deve conter pelo menos 6 caracteres!");
        return;
      }
      if (this.senha !== this.confirmarSenha) {
        alert("As senhas não coincidem!");
        return;

      }
    }
  },
};


</script>

<style>
/* Reset simples */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #000;
  color: #fff;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
  border: none;
  cursor: pointer;
}

/* Top navigation */
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 3.5vw;
  background-image: linear-gradient(to bottom,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0));
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.logo {
  font-size: 1.6rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  color: #e50914;
}

.main-menu {
  display: flex;
  gap: 1.25rem;
  font-size: 0.95rem;
}

.main-menu a {
  color: #e5e5e5;
}

.main-menu a.active,
.main-menu a:hover {
  color: #fff;
  font-weight: 600;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.icon-button {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #fff;
}

.icon-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.profile {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background: linear-gradient(135deg, #030303, #176181);
}

main {
  padding-top: 56px;
  /* espaço para o header fixo */
}

/* Hero section */
.hero {
  position: relative;
  height: 70vh;
  min-height: 420px;
  color: #fff;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transform: scale(1.05);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 20% 20%,
      rgba(0, 0, 0, 0.2),
      transparent 55%),
    linear-gradient(to top, #000 10%, transparent 60%);
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 40rem;
  padding: 12vh 3.5vw 3rem;
}

.hero-title {
  font-size: clamp(2.4rem, 4vw, 3.6rem);
  font-weight: 900;
  margin-bottom: 1rem;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
}

.hero-overview {
  font-size: 0.98rem;
  line-height: 1.4;
  color: #e5e5e5;
  max-width: 34rem;
  margin-bottom: 1.5rem;
}

.hero-actions {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.55rem 1.4rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 0.98rem;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.btn-primary {
  background-color: #fff;
  color: #000;
}

.btn-primary:hover {
  background-color: #e6e6e6;
  transform: scale(1.02);
}

.btn-secondary {
  background-color: #fff;
  color: #000;
}

.btn-secondary:hover {
  background-color: #e6e6e6;
  transform: scale(1.02);
}

.hero-pagination {
  display: flex;
  gap: 0.4rem;
}

.hero-dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.4);
}

.hero-dot.active {
  width: 18px;
  background-color: #fff;
}

/* Rows */
.rows {
  margin-top: -3rem;
  /* puxa as listas para perto do destaque */
  padding: 0 3.5vw 3rem;
  background: linear-gradient(to bottom,
      rgba(0, 0, 0, 0) 0%,
      #000 18%,
      #000 100%);
}

.row {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  gap: 16px;
  flex-wrap: nowrap;
  padding-bottom: 10px;
  /* Esconde barra de rolagem no chrome, safari e opera */
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* Internet Explorer 10+ */
  display: none;
}

.row-title {
  font-size: 1.25rem;
  font-weight: 900;
  margin-bottom: 0.90rem;
}

.row-scroller {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(130px, 180px);
  gap: 0.4rem;
  overflow-x: auto;
  padding-bottom: 0.6rem;
  scrollbar-width: thin;
}

.row-scroller::-webkit-scrollbar {
  height: 6px;
}

.row-scroller::-webkit-scrollbar-track {
  background: transparent;
}

.row-scroller::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 999px;
}

.card {
  flex: 0 0 auto;
  width: 180px;
  height: 300px;
  background-color: #333;
  color: #fff;
  border-radius: 6px;
  overflow: hidden;
}

.card img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.card::after {
  content: "";
  position: absolute;
  inset: 0;
  box-shadow: inset 0 0 25px rgba(0, 0, 0, 0.35);
}

.card:hover {
  transform: scale(1.08);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.6);
}

.card-title {
  position: absolute;
  left: 0.4rem;
  right: 0.4rem;
  bottom: 0.4rem;
  z-index: 1;
  font-size: 0.78rem;
  font-weight: 600;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.9);
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.excel-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

.excel-table th,
.excel-table td {
  border: 1px solid #000;
}

.excel-table th,
.excel-table td {
  padding: 8px 12px;
  text-align: left;
}

.excel-table thead th {
  background-color: #e8e8e8;
  font-weight: bold;
  font-size: 100.5%;
}

/* Footer */
.footer {
  padding: 2rem 3.5vw;
  font-size: 0.8rem;
  color: #777;
}

/* Responsividade básica */
@media (max-width: 768px) {
  .top-nav {
    padding-inline: 4vw;
  }

  .main-menu {
    display: none;
  }

  .hero-content {
    padding-inline: 4vw;
    padding-top: 18vh;
  }

  .hero {
    height: 65vh;
  }
}
</style>