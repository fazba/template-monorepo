<template>
  <div class="login">
    <div class="login__content">
      <div class="login__content__logo">
        <img :src="iconLogo" alt="" class="login__content__logo--icon" />
        <img :src="logoTitle" alt="" class="login__content__logo--title" />
      </div>
      <div class="login__content__login--form">
        <el-input
          class="login__content__login--form__userName"
          v-model="userData.username"
          placeholder="请输入用户名"
        />
        <el-input
          class="login__content__login--form__password"
          v-model="userData.password"
          show-password
          placeholder="请输入密码"
        />
        <div class="login__content__login--form__submit" @click="onSubmit">
          <span class="login__content__login--form__submit--content">确认</span>
          <img
            :src="submitImage"
            alt=""
            class="login__content__login--form__submit--image"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
/**引入svg */
import iconLogo from './assets/svg/logo.svg'
import logoTitle from './assets/svg/logo_title.svg'
import submitImage from './assets/svg/submit_login.svg'
import router from '@/plugins/router'
import { login } from '@/apis/login/index'
import { sessionCache } from '@/utils/storage'

const userData = reactive({
  username: 'cityAdmin',
  password: '123456',
})

/** 登录 */
const onSubmit = async () => {
  const { data } = await login(userData)
  const userType = data.userName
  if (data) {
    sessionCache.setItem('userType', userType)
    router.push('./')
  }
}
</script>
<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  position: relative;
  background: url('./assets/image/login_backgroundImgage.png') center no-repeat;
  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &__logo {
      display: flex;
      align-items: center;
      &--icon {
        margin-right: 20px;
      }
    }
    &__login--form {
      width: 70%;
      margin: auto;
      margin-top: 27px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      &__password {
        margin-top: 40px;
      }
      &__submit {
        margin-top: 20px;
        display: flex;
        align-items: center;
        cursor: pointer;
        &--content {
          color: #0047ff;
          font-weight: 700;
          font-size: 18px;
          text-shadow: 4px 0px 4px rgba(27, 115, 217, 0.25);
        }
        &--image {
          margin-left: 12px;
        }
      }
      :deep(.el-input__inner) {
        color: #0047ff;
      }

      :deep(.el-input__inner::placeholder) {
        color: #0047ff;
      }

      :deep(.el-input__wrapper) {
        background-color: transparent;
        box-shadow: none;
        border-bottom: 1px solid #0057ff;
        border-radius: 0;
      }
    }
  }
}
</style>
