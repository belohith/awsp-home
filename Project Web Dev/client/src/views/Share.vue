<template>

  <div class="section">
      <div class="home" style="position: fixed; top: -50%; left: -50%; width: 200%; height: 200%;">
    

            <img src="../assets/homescreen.png" style="position: absolute; 
            top: 0; 
            left: 0; 
            right: 0; 
            bottom: 0; 
            margin: auto; 
            min-width: 50%;
            min-height: 50%;">

      </div>
      <h1 class="title"> Share Your Stories and Progress </h1>
      
      <div class="columns">

        <div class="column is-half is-offset-one-quarter">

            <post-edit :new-post="newPost" @add="add()" />

            <div class="post" v-for=" (p, i) in posts" :key="p.src">
                <post :post="p" @remove="remove(p, i)" />
            </div>

        </div>

        <div class="column">
            <post :post="newPost" />
        </div>
      </div>


  </div>
</template>

<script>
import Post from '../components/Post.vue';
import session from "../services/session";
import { Add, Delete, GetFeed } from "../services/posts";
import PostEdit from "../components/Post-edit.vue";

const newPost = ()=> ({ user: session.user, user_handle: session.user.handle })

export default {
    components: {
        Post,
        PostEdit
    },
    data: ()=> ({
        posts: [],
        newPost: newPost()
    }),
    async mounted(){
        this.posts = await GetFeed(session.user.handle)
    },
    methods: {
        async remove(post, i){
            console.log({post})
            const response = await Delete(post._id)
            if(response.deleted){
                this.posts.splice(i, 1)
            }
        },
        async add(){
            console.log("Adding new post at " + new Date())
            const response = await Add(this.newPost);
            console.log({ response });

            if(response){
                this.posts.unshift(response);
                this.newPost = newPost();
            }
        }
    }
}

</script>

<style>
    .card {
        margin-bottom: 10px;
    }
</style>