
<template>
    <div>
        <div class="form-group">
            <router-link to="/" class="btn btn-default">Back</router-link>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">Edit book</div>
            <div class="panel-body">
                <form v-on:submit.prevent="saveForm()">
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Book name</label>
                            <input type="number" v-model="book.chapter_days_cost" class="form-control">
                        </div>
                    </div>
                 <!--   <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Book address</label>
                            <input type="text" v-model="book.address" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Book website</label>
                            <input type="text" v-model="book.website" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Book email</label>
                            <input type="text" v-model="book.email" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <button class="btn btn-success">Update</button>
                        </div>
                    </div>-->
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            let app = this;
            let id = app.$route.params.id;
            app.bookId = id;
            axios.get('/api/v1/books/' + id)
                .then(function (resp) {
                    app.book = resp.data;
                })
                .catch(function () {
                    alert("Could not load your book")
                });
        },
        data: function () {
            return {
                bookId: null,
                book: {
                    chapter_days_cost: '',
                  /*  address: '',
                    website: '',
                    email: '',*/
                }
            }
        },
        methods: {
            saveForm() {
                var app = this;
                var newBook = app.book;
                axios.patch('/api/v1/books/' + app.bookId, newBook)
                    .then(function (resp) {
                        app.$router.replace('/');
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        alert("Could not create your book");
                    });
            }
        }
    }
</script>
