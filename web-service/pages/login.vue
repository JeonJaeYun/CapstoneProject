<template>
    <v-main>
      <v-container class="container">
        <v-row class="grid">
          <v-col>
            <v-card>
              <v-card-title class="d-flex justify-center">
                <h1>LOGIN</h1>
              </v-card-title>
              <v-card-text>
                <v-form @submit.prevent="signIn">
                  <v-text-field
                    v-model="email"
                    label="ID"
                    placeholder="ID"
                    required
                    autocomplete="nickname"
                    type="ID"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    label="Password"
                    placeholder="Password"
                    required
                    autocomplete="current-password"
                    type="password"
                  ></v-text-field>
                  <v-checkbox v-model="remember" label="Remember me"></v-checkbox>
                  <v-btn type="submit" class="contrast">LOGIN</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        remember: false
      };
    },
    methods: {
      signIn() {
        // Sign in logic here
      }
    }
  };
  </script>