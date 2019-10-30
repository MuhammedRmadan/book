<template>
    <div>
        <div class="form-group">
            <router-link :to="{name: 'createBook'}" class="btn btn-success">Create new book</router-link>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">Books list</div>
            <div class="panel-body">
                <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                      <!--  <th>Address</th>
                        <th>Website</th>
                        <th>Email</th>
                        <th width="100">&nbsp;</th>-->
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="book , index in books">
                        <td>{{ book.chapter_days_cost }}</td>
                      <!--  <td>{{ book.address }}</td>
                        <td>{{ book.website }}</td>
                        <td>{{ book.email }}</td>
                        <td>
                            <router-link :to="{name: 'editBook', params: {id: book.id}}" class="btn btn-xs btn-default">
                                Edit
                            </router-link>
                            <a href="#"
                               class="btn btn-xs btn-danger"
                               v-on:click="deleteEntry(book.id, index)">
                                Delete
                            </a>
                        </td>-->
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                books: []
            }
        },
        mounted() {
            var app = this;
            axios.get('/api/v1/books')
                .then(function (resp) {
                    app.books = resp.data;
                })
                .catch(function (resp) {
                    console.log(resp);
                    alert("Could not load books");
                });
        },
        methods: {
            deleteEntry(id, index) {
                if (confirm("Do you really want to delete it?")) {
                    var app = this;
                    axios.delete('/api/v1/books/' + id)
                        .then(function (resp) {
                            app.books.splice(index, 1);
                        })
                        .catch(function (resp) {
                            alert("Could not delete book");
                        });
                }
            }
        }
    }
</script>
