<template>
  <v-card style="width:50%">
    <v-card-title>{{ title }}</v-card-title>
    <v-list>
      <v-list-item
        v-for="(myclub, i) in myclubs"
        :key="i"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ myclub.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ myclub.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "MyClubCard",
  data() {
    return {
      myclubs: [
        {
          icon: "mdi-panorama-variant-outline",
          title: "Club 1",
        },
        {
          icon: "mdi-panorama-variant-outline",
          title: "Club 2",
        },
        {
          icon: "mdi-panorama-variant-outline",
          title: "Club 3",
        },
        {
          icon: "mdi-panorama-variant-outline",
          title: "Club 4",
        },
        {
          icon: "mdi-panorama-variant-outline",
          title: "Club 5",
        },
      ],
      title: "My Club",
    };
  },
};
</script>
