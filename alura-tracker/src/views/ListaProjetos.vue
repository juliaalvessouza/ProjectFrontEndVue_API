<template>
    <div class="projetos">
        <h1 class="title" style="color:var(--texto-primario);">Projetos</h1>
        <RouterView></RouterView>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name:'ListaProjeto'
})
</script>

<style scoped>
.projetos {
    padding: 1.25rem;
}
.text{
    color: var(--texto-primario);
}
</style>