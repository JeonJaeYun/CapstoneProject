<template>
  <div style="height:100%; padding:20px; padding-right: 40px; padding-left: 40px; border-right: 1px solid white;">
    <img
      :src="getImageDataUri(clubInfo.multipartFile)"
      style="height: 180px; width: 240px; border: 1px solid #ffffff"
    />
    <h1>{{ clubInfo.clubName }}</h1>
    <p>{{ clubInfo.description }}</p>
    <hr/>
  </div>
</template>

<script>
export default {
  name: "LeftClubNav",
  data() {
    return {
      clubInfo: {},
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