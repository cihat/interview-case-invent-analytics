<template lang="pug">
.container 
  a-form(:model='formState' name='basic' :label-col='{ span: 8 }' :wrapper-col='{ span: 16 }' autocomplete='off' @finish='onFinish' @finishfailed='onFinishFailed')
    h1 Login
    a-form-item(label='Username' name='username' :rules="[{ required: true, message: 'Please input your username!' }]")
      a-input(v-model:value='formState.username')
    a-form-item(label='Password' name='password' :rules="[{ required: true, message: 'Please input your password!' }]")
      a-input-password(v-model:value='formState.password')
    a-form-item(name='remember' :wrapper-col='{ offset: 8, span: 16 }')
      a-checkbox(v-model:checked='formState.remember') Remember me
    a-form-item(:wrapper-col='{ offset: 8, span: 16 }')
      a-button(type='primary' html-type='submit') Submit
    .form-item
      a-p I do not have an user.
        router-link(to="/register") 
          a-b Register

</template>
<script>
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  setup() {
    const formState = reactive({
      username: '',
      password: '',
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
  border-radius: 10px;
  background-color: rgba(85, 61, 61, 0.5);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);


  .form-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  form {
    background-color: white;
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  }
}
</style>