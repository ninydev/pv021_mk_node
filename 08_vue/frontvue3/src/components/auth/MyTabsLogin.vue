<template>
  <div>
    <!-- Pills navs -->
    <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
      <li class="nav-item" role="presentation">
        <a class="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
           aria-controls="pills-login" aria-selected="true">Login</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
           aria-controls="pills-register" aria-selected="false">Register</a>
      </li>
    </ul>
    <!-- Pills navs -->

    <!-- Pills content -->
    <div class="tab-content">
      <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
        <MyLogin></MyLogin>
      </div>
      <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
        <MyRegister></MyRegister>
      </div>
    </div>
    <!-- Pills content -->
  </div>
</template>

<script>
import MyRegister from '@/components/auth/MyRegister'
import MyLogin from '@/components/auth/MyLogin'

export default {
  name: 'MyTabsLogin',
  components: { MyRegister, MyLogin }
}
</script>

<style scoped>

</style>
