<template>
  <v-card style="margin: 10px">
    <v-card-title>{{ title }}</v-card-title>
    <v-list style="display: flex; flex-direction: row">
      <v-list-item
        v-for="(category, i) in categories"
        :key="i"
        :to="category.to"
        router
        exact
        style="padding: 0; display: flex; flex-direction: row; justify-content: center;"
      >
        <v-list-item-action
          style="margin:0; padding-top: 10px; padding-bottom: 10px; display: flex; flex-direction: column; align-items: center"
        >
          <v-icon>{{ category.icon }}</v-icon>
          <v-list-item-title>{{ category.title }}</v-list-item-title>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "ClubCategoryCard",
  data() {
    return {
      categories: [
        {
          icon: "mdi-palette",
          title: "Art",
          to: "/art",
        },
        {
          icon: "mdi-book-open-page-variant",
          title: "Book",
          to: "/book",
        },
        {
          icon: "mdi-music-box",
          title: "Music",
          to: "/music",
        },
        {
          icon: "mdi-chef-hat",
          title: "Cook",
          to: "/cook",
        },
        {
          icon: "mdi-soccer",
          title: "Sports",
          to: "/sports",
        },
        {
          icon: "mdi-airplane",
          title: "Travel",
          to: "/travel",
        },
      ],
      title: "Club Categories",
    };
  },
};
</script>
