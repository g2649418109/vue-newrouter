<template>
  <Row>
    <div class="notfound">
      <img src="../assets/img/404.png" alt="找不到页面啦！">
    </div>
    <div class="top">
      <p class="bold">哦唷！找不到页面啦！</p>
    </div>
  </Row>
</template>
<script>
  export default {
    name: 'notfound',
    components: {
    }
  }
</script>
<style type="text/css">
  .notfound{
    background-color: #3CB371;
  }
  .bold{
    font-size: 50px;
    color: #2E8B57;
  }
  .top{
    margin-top: 45px;
  }
</style>
