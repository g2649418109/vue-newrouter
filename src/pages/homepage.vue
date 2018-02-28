<template>
  <div class="dashboard">
    <Row :gutter="24">
      <Col span="24">
        <div>{{$store.state.count}}</div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'homePage',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
</style>
