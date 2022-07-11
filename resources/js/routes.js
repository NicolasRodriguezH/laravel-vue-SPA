const Contact  = () => import('./components/Contact.vue')
const Home  = () => import('./components/Home.vue')

/* Importamos componentes para el Blog */
const Create  = () => import('./components/blog/Create.vue')
const Edit  = () => import('./components/blog/Edit.vue')
const Show  = () => import('./components/blog/Show.vue')

export const routes = [
    {
        name:'home',
        path:'/',
        component:Home
    },
    {
        name:'contact',
        path:'/contacto',
        component:Contact
    },
    {
        name:'showBlogs',
        path:'/blogs',
        component:Show
    },
    {
        name:'createBlog',
        path:'/create',
        component:Create
    },
    {
        name:'editBlog',
        path:'/edit/:id',
        component:Edit
    },
]