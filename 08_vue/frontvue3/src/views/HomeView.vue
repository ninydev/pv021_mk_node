<template>
  <div class="home">
    <MyRegister></MyRegister>
  </div>
</template>

<script>
// @ is an alias to /src
import MyRegister from '@/components/auth/MyRegister'

export default {
  name: 'HomeView',
  components: {
    MyRegister
  }
}
</script>
