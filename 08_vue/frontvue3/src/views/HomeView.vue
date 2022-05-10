<template>
  <div class="home">
    <SongLyrics></SongLyrics>
  </div>
</template>

<script>
// @ is an alias to /src
import SongLyrics from '@/components/axios/SongLyrics'

export default {
  name: 'HomeView',
  components: {
    SongLyrics
  }
}
</script>
