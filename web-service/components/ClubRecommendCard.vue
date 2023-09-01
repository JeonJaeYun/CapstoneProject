<template>
    <v-card style="margin:10px;">
      <v-card-title>{{ title }}</v-card-title>
      <v-list>
        <v-list-item
          v-for="(club, i) in clubs"
          :key="i"
          :to="club.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ club.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ club.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </template>
  
  <script>
  export default {
    name: "ClubRecommendCard",
    data() {
      return {
        clubs: [
          {
            icon: "mdi-home-circle",
            title: "Club 1",
            to: "/club/1",
          },
          {
            icon: "mdi-list-box-outline",
            title: "Club 2",
            to: "/club/2",
          },
          {
            icon: "mdi-magnify",
            title: "Club 3",
            to: "/club/3",
          },
          {
            icon: "mdi-list-box-outline",
            title: "Club 2",
            to: "/club/2",
          },
          {
            icon: "mdi-magnify",
            title: "Club 3",
            to: "/club/3",
          },
        ],
        title: "Club Recommend",
      };
    },
  };
  </script>
  