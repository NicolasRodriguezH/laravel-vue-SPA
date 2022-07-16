<template>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header"><h4>Editar blog</h4></div>
                    <div class="card-body">
                        <form @submit.prevent="toUpdate">
                            <div class="row">
                                <div class="col-12 mb-2">
                                    <div class="form-group">
                                        <label>Título</label>
                                        <input type="text" class="form-control" v-model="blog.title">
                                    </div>
                                </div>
                                <div class="col-12 mb-2">

                                    <div class="form-floating">
                                    <textarea class="form-control" id="floatingTextarea2" v-model="blog.content" style="height: 100px"></textarea>
                                    <label for="floatingTextarea2">Contenido</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary">Actualizar</button>
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
        name:'editar-blog',
        data() {
            return {
                blog: {
                    title:'',
                    content:''
                }
            }
        },
        mounted() {
            this.showBlogs()
        },
        methods: {
            async showBlogs() {
                await this.axios.get(`/api/blog/${this.$route.params.id}`)
                .then(response => {
                    const {title, content} = response.data
                    this.blog.title = title
                    this.blog.content = content
                })
                .catch(error => {
                    console.log(error)
                })
            },
            async toUpdate() {
                await this.axios.put(`/api/blog/${this.$route.params.id}`, this.blog)
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