<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="">
        </h1>
        <button class="button" @click="alterarTema">
            {{textoBotao}}
        </button>
        <nav class="panel mt-5">
            <ul>
                <li>
                    <RouterLink to="/" class="link">
                        <i class="fas fa-tasks"></i>
                        Tarefas
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/listaProjetos" class="link">
                        <i class="fas fa-project-diagram"></i>
                        Projetos
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BarraLateral',
    emits:['aoTemaAlterado'],
    data (){
        return {
            modoEscuroAtivo: false
        }
    },    
    methods: {
        alterarTema(): void{
            this.modoEscuroAtivo = !this.modoEscuroAtivo
            this.$emit('aoTemaAlterado', this.modoEscuroAtivo)
        }
    },
    computed: {
        textoBotao(): string{
            return this.modoEscuroAtivo ? 'Claro' : 'Escuro'
        }
    },
})
</script>

<style scoped>
.h1 {
    text-align: center;
}
.strong {
    color: #f95738;
}
header {
    background: #0d3b66;
    width: 100%;
    height: 100vh;
    padding: 2rem;
}

@media only screen and (max-width: 768px) {
    header {
    height: auto;
  }
}
.panel li {
  margin: 8px 0;
}
.link {
  color: #fff;
}
.link:hover {
  color: #FAF0CA;
}
.link.router-link-active {
  color: #FAF0CA;
}
</style>