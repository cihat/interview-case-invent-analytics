<template lang="pug">
.container 
  a-form(:model='formState' name='basic' :label-col='{ span: 8 }' :wrapper-col='{ span: 16 }' autocomplete='on' @finish='onSubmit' @finishfailed='onFinishFailed')
    h1 Login
    a-form-item(label='E-mail' name='email' :rules="[{ required: true, message: 'Please input your email!' }]")
      a-input(v-model:value='formState.email')
    a-form-item(label='Password' name='password' :rules="[{ required: true, message: 'Please input your password!' }]")
      a-input-password(v-model:value='formState.password')
    .form-item
      a-p.backend-errors(v-if="formState.backendError") {{formState.backendError?.message}}
    a-form-item(name='remember' :wrapper-col='{ offset: 8, span: 16 }')
      a-checkbox(v-model:checked='formState.remember') Remember me
    a-p(v-if="loading") Loading...
    a-form-item(:wrapper-col='{ offset: 8, span: 16 }')
      a-button(type='primary' html-type='submit') Login
    .form-item
      a-p I do not have an user.
        router-link(to="/register") 
          a-b Register

</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'login',
  data() {
    return {
      formState: {
        email: '',
        password: '',
        remember: true,
        backendError: null,
      },
      loading: false,
    };
  },
  methods: {
    ...mapActions('user', ['login']),
    async onSubmit() {
      this.loading = true;
      try {
        await this.login({
          email: this.formState.email,
          password: this.formState.password,
        });
        this.$router.push({ path: '/' });
      } catch (error) {
        this.formState.backendError = error;
      } finally {
        this.loading = false;
      }
    },
  },
}
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
    min-width: 500px;
    min-height: 550px;
  }
}
</style>