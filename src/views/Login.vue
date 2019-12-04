<template>
  <div class="loginCss">
    <el-form :model="LoginForm" :rules="rules" ref="LoginForm" label-width="100px">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="LoginForm.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="LoginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="loginClick('LoginForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {userLogin, base_url} from '../api/api'

export default {
  name: 'login',
    data() {
      return {
          LoginForm: {
              userName: '',
              password: '',
          },
          rules: {
              userName: [
                  { required: true, message: '请输入用户名', trigger: 'blur' }
              ],
              password: [
                  { required: true, message: '请输入密码', trigger: 'blur' }
              ],
          },
          router: {

          }
      }
    },
    methods: {
        loginClick(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log(base_url);
                    const loginParams = { userName: this.LoginForm.userName, password: this.LoginForm.password };
                    const lang = localStorage.getItem('lang') === 'en' ? 'en_US' : 'zh_CN';
                    userLogin(loginParams, lang).then(function (response) {
                        console.log(response);
                    }).catch(function (error) {
                            console.log(error);
                    });
                    //登录页面进来默认路由没有发生变化，使用中间页面跳转实现路由变化
                    this.$router.push('/redirect' + '/main-index');

                    //菜单中英文模拟处理
                    let userMenus = [{
                        zhName: '首页',
                        enName: 'Main Index',
                        flag: 'main-index'
                    }, {
                      zhName: '设备管理',
                      enName: 'Device Management',
                      flag: 'device'
                    },  {
                        zhName: '设备列表',
                        enName: 'Device List',
                        flag: 'deviceList'
                    }, {
                        zhName: '设备模板管理',
                        enName: 'Device Template Management',
                        flag: 'deviceTemplate'
                    }, {
                        zhName: '设备模板列表',
                        enName: 'Device Template List',
                        flag: 'templateList'
                    }];
                    localStorage.setItem('userMenus',JSON.stringify(userMenus))
                } else {
                    console.log('error submit!!');
                }
            });
        }
    }
}
</script>
<style>
.loginCss {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
