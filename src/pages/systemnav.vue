<template>
  <Row>
    <Col span="2">
      <div class="sidebar">
          <Menu theme="dark" width="100%" class="menu">
            <router-link :to="item.path" v-for="(item,index) in systemchildrenroute">
              <Menu-item :name="item.name" class="subM">
                {{item.name}}
              </Menu-item>
            </router-link>
          </Menu>
      </div>
    </Col>
    <Col span="21" offset="3">
      <div>
      <router-view></router-view>
      </div>
    </Col>
  </Row>
</template>

<script>
  export default {
    name: 'systemnav',
    components: {
    },
    data: function () {
      return {
        childrenroutes: [],
        systemchildrenroute: []
      }
    },
    mounted () {
      this.getRoutes()
    },
    methods: {
      getRoutes () {
        this.childrenroutes = this.$router.options.routes[0].children
        for (let i = 0; i < this.childrenroutes.length; i++) {
          if (this.childrenroutes[i].path === '/systemnav') {
            this.systemchildrenroute = this.childrenroutes[i].children
            break
          }
        }
      }
    }
  }
</script>
