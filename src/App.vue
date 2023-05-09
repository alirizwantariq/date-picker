<template>
  <v-app>
    <v-main>
      <v-container>
        <nav class="w-100">
          <router-link to="/">home</router-link>
          <router-link to="/datepicker">date</router-link>
        </nav>
        <v-spacer></v-spacer>
        <v-btn @click="toggleTheme" class="ml-2 mt-2">toggle theme</v-btn>
        <v-conatiner class="d-flex justify-center align-center mt-5 w-100">
          <router-view />
        </v-conatiner>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { useTheme } from 'vuetify'

export default {
  name: 'App',
  components: {
  },
  setup() {
    const theme = useTheme()

    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
  }
}
</script>

<style scoped>
.router-link-active {
  background-color: yellow;
  border-radius: 2px;
  color: red;
  padding: 5px, 10px;
  margin: 5px;
}
</style>
