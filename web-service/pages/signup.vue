<template>
  <v-container class="SignupPage">
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>회원가입</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="SignupSubmit">
              <v-text-field
                id="name"
                v-model="name"
                placeholder="이름"
              ></v-text-field>

              <v-text-field
                id="loginId"
                v-model="loginId"
                placeholder="아이디"
              ></v-text-field>

              <v-text-field
                id="password"
                type="password"
                v-model="password"
                placeholder="비밀번호"
              ></v-text-field>

              <v-text-field
                id="pwdCheck"
                type="password"
                v-model="pwCheck"
                placeholder="비밀번호 확인"
              ></v-text-field>

              <v-text-field
                id="phoneNumber"
                v-model="phoneNumber"
                placeholder="전화번호"
                type="tel"
              ></v-text-field>

              <v-text-field
                id="birthday"
                v-model="birthday"
                placeholder="생년월일"
                type="date"
              ></v-text-field>

              <v-select
                id="gender"
                v-model="gender"
                :items="['MALE', 'FEMALE']"
                placeholder="성별"
              ></v-select>

              <v-btn class="mt-3" block type="submit"> 회원가입 </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      loginId: "",
      password: "",
      pwCheck: "",
      phoneNumber: "",
      birthday: "",
      gender: "",
    };
  },
  methods: {
    async SignupSubmit() {
      // JSON 형식의 데이터
      let SignupData = {
        loginId: this.loginId,
        password: this.password,
        name: this.name,
        phoneNumber: this.phoneNumber,
        birthday: this.birthday,
        gender: this.gender,
      };

      try {
        if (this.name === "") {
          alert("이름을 입력하세요.");
          return;
        }
        if (this.loginId === "") {
          alert("ID를 입력하세요.");
          return;
        }
        if (this.password === "") {
          alert("비밀번호를 입력하세요.");
          return;
        }
        if (this.password !== this.pwCheck) {
          alert("비밀번호 확인이 일치하지 않습니다.");
          return;
        }
        if (this.phoneNumber === "") {
          alert("전화번호를 입력하세요.");
          return;
        }
        if (this.birthday === "") {
          alert("생년월일을 선택하세요.");
          return;
        }
        if (this.gender === "") {
          alert("성별을 선택하세요.");
          return;
        }

        const config = {
          headers: {
            "Content-Type": "application/json", // JSON 형식으로 변경
          },
        };

        await this.$axios
          .post("/user-service/signup", JSON.stringify(SignupData), config)
          .then((res) => {
            console.log(res);
            alert("회원가입 되었습니다.");
            this.$router.push("/login")
          });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
