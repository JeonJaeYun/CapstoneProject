<template>
    <div style="padding:10px; background-color: #333; border-radius: 10px;">
      <v-row no-gutters>
        <v-chip
          v-for="(navList, i) in navLists"
          :key="i"
          cols="auto"
          class="d-flex"
          style="margin:10px;"
        >
          <v-list-item router exact>
            <v-icon>{{ navList.icon }}</v-icon>
            <h3>{{ navList.title }}</h3>
          </v-list-item>
        </v-chip>
      </v-row>
    </div>
  </template>

<script>
export default {
  name: "ClubNavigation",
  data() {
    return {
      navLists: [
      {
          icon: "mdi-panorama-variant-outline",
          title: "홈",
        },
        {
          icon: "mdi-panorama-variant-outline",
          title: "공지사항",
        },
        {
          icon: "mdi-panorama-variant-outline",
          title: "일정",
        },
        {
          icon: "mdi-panorama-variant-outline",
          title: "게시판",
        },
        {
          icon: "mdi-panorama-variant-outline",
          title: "화상채팅",
        },
        {
          icon: "mdi-panorama-variant-outline",
          title: "2D 가상환경",
        },
      ],
    };
  },
};
</script>
