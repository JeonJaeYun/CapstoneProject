<template>
  <div style="color: white">
    <ClubNavigation/>
    <div style="height: 100px; width: 150px; border: 1px solid #ffffff">
      <img :src="getImageDataUri(clubInfo.multipartFile)" />
    </div>

    <h1>{{ clubInfo.clubName }}</h1>
    <p>{{ clubInfo.description }}</p>
  </div>
</template>

<script>
import ClubNavigation from "../../../components/ClubNavigation.vue";
export default {
  components: {
    ClubNavigation,
  },
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
