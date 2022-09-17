<template lang="pug">
a-form(:form='form' :label-col='{ span: 5 }' :wrapper-col='{ span: 12 }' @submit='handleSubmit')
  a-form-item(label='Title')
    a-input(v-decorator="['title', { rules: [{ required: true, message: 'Please input book title!' }] }]")
  a-form-item(label='Author')
    a-input(v-decorator="['author', { rules: [{ required: true, message: 'Please input book author!' }] }]")
  a-form-item(label='Description')
    a-input(v-decorator="['description', { rules: [{ required: true, message: 'Please input book description!' }] }]")
  a-form-item(:wrapper-col='{ span: 12, offset: 5 }')
    a-button(type='primary' html-type='submit')
      | Submit
</template>

<script>
import { mapActions } from 'vuex';
import { message, notification } from 'ant-design-vue'

export default {
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },
  computed: {
    ...mapActions('book', ['createBook']),
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFieldsAndScroll(async (err, values) => {
        // if (err) return

        try {
          await this.createForm(values)
          message.success("Creted book successfully 🎉")
          this.$router.push('/')
        } catch (e) {
          notification.error({
            message: 'Error',
            description: e?.message
          })
        }
        finally {
          console.log('finally')
        }
      })
    },
  },
  beforeCreate() {
    const component = this
    this.form = this.$form.createForm(this, {
      name: 'create-book',
      onValuesChange() {
        component.backendError = null
      }
    })
  }
};
</script>
