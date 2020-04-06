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
            <li v-for="player in Game.State.Players" :key="player.Name">
              {{player.Name}} {{player.Score}}
              
            </li>
          </ul>
        </div>
        <img :src="Game.State.CurrentPicture" class="card-image"/>
      </div>
      </div>

</template>

<script>
import * as Game from "../models/Game";

export default {
  name: 'Home',
  created() {
    Game.Init();
  },
  data:()=>({
    Game    
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