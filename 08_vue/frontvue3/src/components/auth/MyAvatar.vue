<template>
  <div>
    <img src="{{currentAvatarUrl}}">
    <input type="file" @change="uploadAvatar" >
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'MyAvatar',
  setup () {
    const store = useStore()
    return {
      currentAvatarUrl: computed(() => store.getters.currentAvatarUrl),
      uploadAvatar: function (e) {
        const files = e.target.files || e.dataTransfer.files
        if (!files.length) return
        store.dispatch('apiUploadAvatar', files[0])
      }
    }
  }
}
</script>

<style scoped>

</style>
