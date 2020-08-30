<template>
  <div class="home">
    <FormTodoList/>
  </div>
</template>

<script>
// @ is an alias to /src
import FormTodoList from '@/components/FormTodoList'

export default {
  name: 'Home',
  components: {
    FormTodoList
  }
}
</script>
