'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: {
    authenticated: false
  },
  Login: function Login(context, info) {
    context.$http.post('api/anon/login', info).then(function (data) {
      if (data.body.ret_code === 1) {
        localStorage.setItem('token', data.body.ret_data.token);
        this.authenticated = true;
        this.$router.push({ path: '/homepage' });
      } else {
        this.$Message.error(data.body.ret_msg);
      }
    }).catch(function (response) {
      console.log(response);
    });
  },
  getAuthHeader: function getAuthHeader() {
    return {
      'Authorization': localStorage.getItem('token')
    };
  },
  checkAuth: function checkAuth() {
    var token = localStorage.getItem('token');
    if (token) {
      this.authenticated = true;
    } else {
      this.authenticated = false;
    }
  }
};
//# sourceMappingURL=auth.js.map