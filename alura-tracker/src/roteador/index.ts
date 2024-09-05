import ListaProjetos from "@/views/ListaProjetos.vue";
import ProjetoFormulario from "@/views/Projetos/ProjetoFormulario.vue";
import ProjetosLista from "@/views/Projetos/ProjetosLista.vue";
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
        component: ListaProjetos,
        children: [
            {
                path: '',
                name: 'Lista Projetos',
                component: ProjetosLista
            },
            {
                path: 'novo',
                name: 'Novo Projetos',
                component: ProjetoFormulario
            },
            {
                path: ':id',
                name: 'Editar Projetos',
                component: ProjetoFormulario,
                props: true
            }
        ]
    }        
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;