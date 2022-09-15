<template lang="pug">
.container
  a-form(:model='formState' name='basic' :label-col='{ span: 8 }' :wrapper-col='{ span: 16 }' autocomplete='off' @finish='onFinish' @finishfailed='onFinishFailed')
    h1 Register
    a-form-item(label='Full Name' name='name' :rules="[{ required: true, message: 'Please input your full name!' }]")
      a-input(v-model:value='formState.name')
    a-form-item(label='Username' name='username' :rules="[{ required: true, message: 'Please input your username!' }]")
      a-input(v-model:value='formState.username')
    a-form-item(label='E-mail Address' name='email' :rules="[{ required: true, message: 'Please input your email address!' }]")
      a-input(v-model:value='formState.email')
    a-form-item(label='Password' name='password' :rules="[{ required: true, message: 'Please input your password!' }]")
      a-input-password(v-model:value='formState.password')
    a-form-item(label='Password Confirmation' name='passwordConfirmation' :rules="[{ required: true, message: 'Please input your password conformation!' }]")
      a-input-password(v-model:value='formState.password')
    a-form-item(name='remember' :wrapper-col='{ offset: 8, span: 16 }')
      a-checkbox(v-model:checked='formState.remember') Remember me
    a-form-item(:wrapper-col='{ offset: 8, span: 16 }')
      a-button(type='primary' html-type='submit') Submit
    .form-item
      a-p I have an user&nbsp;
        router-link(to="/login") 
          a-b Login
  </template>
<script>
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  setup() {
    const formState = reactive({
      name: '',
      username: '',
      password: '',
      email: '',
      remember: true,
    });

    const onFinish = values => {
      console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    return {
      formState,
      onFinish,
      onFinishFailed,
    };
  },

});
</script>

<style lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);

  .form-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>