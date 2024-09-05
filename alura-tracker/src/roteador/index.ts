import ListaProjetos from "@/views/ListaProjetos.vue";
import Tarefas from "@/views/Tarefas.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const rotas: RouteRecordRaw[] = [
    {
    path: '/',
    name: 'TarefaComponente',
    component: Tarefas
    },
    {
    path: '/listaProjetos',
    name: 'ListaProjetos',
    component: ListaProjetos
    }

]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;