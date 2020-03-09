<template>
    <div class="container">
    <div class="card">
        <div class="card-content">
            <div class="title is-1">Game Page</div>
        </div>
    </div>

    <div class="card">
        <div class="card-content">
          <ul>
            <li v-for="player in Players" :key="player.Name">
              {{player.Name}} {{player.Score}}
              
            </li>
          </ul>
        </div>
        <img :src="CurrentPicture" class="card-image"/>
      </div>
      </div>

</template>

<script>
import { Players, PictureDeck, CurrentPicture, Init } from "../models/Game"; 
Init();

export default {
  name: 'Home',
  data:()=>({
    Players,
    PictureDeck,
    CurrentPicture    
  }),
  components: {
    
  }
}
</script>

<style>
  img.card-image {
    width: 100%;
  }
</style>