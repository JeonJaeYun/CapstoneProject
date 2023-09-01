<template>
  <v-card style="margin: 10px; padding: 10px">
    <v-card-title>{{ title }}</v-card-title>
    <v-row>
      <v-col
        v-for="(club, i) in displayedClubs"
        :key="i"
        cols="6"
        style="padding: 5px;"
      >
        <v-list-item :to="club.to" router exact>
          <v-list-item-action>
            <v-icon>{{ club.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ club.title }}</v-list-item-title>
            <v-list-item-description>{{ club.description }}</v-list-item-description>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </v-card>
</template>
  
  <script>
export default {
  name: "ClubRecommendCard",
  data() {
    return {
      clubs: [
        {
          icon: "mdi-panorama-variant-outline",
          title: "Club 1",
          description: "club description",
          to: "/club/1",
        },
        {
          icon: "mdi-panorama-variant-outline",
          title: "Club 2",
          description: "club description",
          to: "/club/2",
        },
        {
          icon: "mdi-panorama-variant-outline",
          title: "Club 3",
          description: "club description",
          to: "/club/3",
        },
        {
          icon: "mdi-panorama-variant-outline",
          title: "Club 4",
          description: "club description",
          to: "/club/4",
        },
        {
          icon: "mdi-panorama-variant-outline",
          title: "Club 5",
          description: "club description",
          to: "/club/5",
        },
      ],
      title: "Club Recommend",
    };
  },
  computed: {
    displayedClubs() {
      // 최대 10개까지만 표시하도록 로직 작성
      return this.clubs.slice(0, 10);
    },
  },
};
</script>
  