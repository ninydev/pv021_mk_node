<template>
  <h1> Все портфолио </h1>
  <ul>
<!--    <li v-for='item in items' :key="item.id" > {{item.name}}</li>-->
  <PortfolioItem
    v-for='item in items'
    :key="item.id"
    :item='item'
  ></PortfolioItem>
  </ul>
</template>

<script>
import PortfolioItem from '@/components/portfolio/PortfolioItem'
export default {
  name: 'PortfolioList',
  components: { PortfolioItem },
  data () {
    return {
      items: [{ id: 1, name: 'pic' }, { id: 2, name: 'pic2' }]
    }
  }
}
</script>

<style scoped>

</style>
