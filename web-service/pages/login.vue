<template>
  <div style="width:100%;">
    <v-card>
      <v-card-title class="d-flex justify-center">
        <h1 style="padding: 20px">LOGIN</h1>
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="Login">
          <v-text-field
            v-model="loginId"
            label="ID"
            placeholder="ID"
            required
            type="ID"
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            placeholder="Password"
            required
            type="password"
          ></v-text-field>
          <v-checkbox v-model="remember" label="Remember me"></v-checkbox>
          <v-btn to="/signup">SIGN UP</v-btn>
          <v-btn type="submit" class="contrast">LOGIN</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginId: "",
      password: "",
    };
  },
  methods: {
    async Login() {
      // JSON 형식의 데이터
      let LoginData = {
        loginId: this.loginId,
        password: this.password,
      };

      try {
        if (this.loginId === "") {
          alert("ID를 입력하세요.");
          return;
        }
        if (this.password === "") {
          alert("비밀번호를 입력하세요.");
          return;
        }

        const config = {
          headers: {
            "Content-Type": "application/json", // JSON 형식으로 변경
          },
        };

        await this.$axios
          .post("/user-service/login", JSON.stringify(LoginData), config)
          .then((res) => {
            console.log(res);
            alert("로그인 되었습니다.");
            this.$router.push("/")
            // access in memory
            // refresh session
          });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
