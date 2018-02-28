<template>
  <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
    <FormItem label="网关地址" prop="name">
      <Input v-model="formValidate.name"  placeholder="请输入" class="formPublic"></Input>
      <div style="clear: both"></div>
    </FormItem>
    <FormItem label="账号" prop="mail">
      <Input v-model="formValidate.mail" placeholder="请输入"  class="formPublic"></Input>
      <div style="clear: both"></div>
    </FormItem>
    <FormItem label="新密码" prop="newPassword">
      <Input v-model="formValidate.newPassword" placeholder="请输入"  class="formPublic"></Input>
      <div style="clear: both"></div>
    </FormItem>
    <FormItem label="邮件标题" prop="title">
      <Input v-model="formValidate.title" placeholder="请输入"  class="formPublic"></Input>
      <div style="clear: both"></div>
    </FormItem>
    <FormItem label="发件人" prop="sender">
      <Input v-model="formValidate.sender" placeholder="请输入"  class="formPublic"></Input>
      <div style="clear: both"></div>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formValidate')" style="float:left">保存</Button>
    </FormItem>
  </Form>
</template>

<script>
    export default {
      data () {
        return {
          formValidate: {
            name: '',
            mail: '',
            newPassword: '',
            title: '',
            sender: ''
          },
          ruleValidate: {
            name: [
              { required: true, message: '网关地址不能为空', trigger: 'blur' }
            ],
            mail: [
              { required: true, message: '账号不能为空', trigger: 'blur' },
              { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
            ],
            newPassword: [
              { required: true, message: '密码不能为空', trigger: 'blur' }
            ],
            title: [
              { required: true, message: '邮件标题不能为空', trigger: 'blur' }
            ],
            sender: [
              { required: true, message: '发件人不能为空', trigger: 'blur' }
            ]
          }
        }
      },
      methods: {
        handleSubmit (name) {
          this.$refs[name].validate((valid) => {
            if (valid) {
              this.$Message.success('Success!')
            } else {
              this.$Message.error('Fail!')
            }
          })
        }
      }
    }
</script>
<style>
.formPublic{
  width:450px;
  float:left;
}
.ivu-form-item-content{
  margin-bottom:10px;
}
</style>
