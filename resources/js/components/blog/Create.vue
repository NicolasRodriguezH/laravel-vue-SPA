<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header"><h4>Crear Blog</h4></div>
                </div>
                <div class="card-body">
                    <form @submit.prevent="create">

                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label for="Titulo">Titulo</label>
                                    <input type="text" class="form-control" v-model="blog.title">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-floating">
                                    <textarea class="form-control" v-model="blog.content" id="floatingTextarea" style="height: 100px"></textarea>
                                    <label for="floatingTextarea">Contenido</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Guardar</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'crear-blog',
        data() {
            return {
                blog: {
                    title:"",
                    content:""
                }
            }
        },
        methods: {
            async create() {
                await this.axios.post('/api/blog',this.blog)
                .then(response => {
                    this.$router.push({name:'showBlogs'})
                })
                .catch(error => {
                    console.log(error)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>