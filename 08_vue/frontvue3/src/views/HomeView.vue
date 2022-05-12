<template>
  <div class="home">
    <MyLogin></MyLogin><hr>
    <MyRegister></MyRegister>
  </div>
</template>

<script>
// @ is an alias to /src
import MyRegister from '@/components/auth/MyRegister'
import MyLogin from '@/components/auth/MyLogin'

export default {
  name: 'HomeView',
  components: {
    MyLogin,
    MyRegister
  }
}
</script>
