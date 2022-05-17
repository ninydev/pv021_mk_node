<template>
  <div class="home">
    <MyProfile></MyProfile>
    <hr>
    <MyLogin></MyLogin><hr>

  </div>
</template>

<script>
// @ is an alias to /src
// import MyRegister from '@/components/auth/MyRegister'
import MyLogin from '@/components/auth/MyLogin'
import MyProfile from '@/components/auth/MyProfile'

export default {
  name: 'HomeView',
  components: {
    MyProfile,
    MyLogin
  }
}
</script>
