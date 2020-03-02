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
export default {

}
</script>

<style>

</style>