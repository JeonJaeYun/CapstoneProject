<template>
  <div style="padding: 20px; padding-right: 30px; padding-left: 40px">
    <img
      :src="getImageDataUri(clubInfo.multipartFile)"
      style="width: 320px; height: 240px"
    />

    <h1 style="margin-top: 10px">{{ clubInfo.clubName }}</h1>

    <p style="margin-top: 10px">{{ clubInfo.description }}</p>
    <p style="margin-top: 10px; font-size: 13px; color: rgb(125, 255, 125)">
      정원 수 : {{ clubInfo.maximumPeople }}
    </p>
    <hr />
    <div class="d-flex flex-column" style="margin-top: 10px;">
      <v-btn>글쓰기</v-btn>
      <v-btn
        v-if="this.user_id == clubInfo.hostId"
        :to="`/clubs/${clubInfo.id}/settings`"
        >모임 수정</v-btn
      >
      <v-btn v-else>모임 탈퇴</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftClubNav",
  data() {
    return {
      clubInfo: {},
      user_id: sessionStorage.getItem("user_id"),
    };
  },
  methods: {
    async getClubInfo({ params }) {
      const clubId = params.clubId;
      try {
        const access_token = this.$store.state.access_token;
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        };
        await this.$axios
          .get(`/club-service/clubs/${clubId}`, config)
          .then((res) => {
            console.log(res);
            this.clubInfo = res.data;
          });
      } catch (err) {
        console.log(err);
      }
    },
    getImageDataUri(imageData) {
      return `data:image/jpg;base64,${imageData}`;
    },
  },
  created() {
    this.getClubInfo(this.$route);
  },
};
</script>