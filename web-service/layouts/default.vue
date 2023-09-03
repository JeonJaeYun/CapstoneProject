<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
          <v-list-item-title v-if="miniVariant" style="font-size: 12px">{{
            item.title
          }}</v-list-item-title>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-btn icon to="/login">
        <v-icon>mdi-login</v-icon>
      </v-btn>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container style="max-width: 100%; padding: 30px">
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item>
          <v-list-item-title>NOTIFICATIONS</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list style="padding: 0">
    <v-list-item
      v-for="(notification, i) in notifications"
      :key="i"
      :to="notification.to"
      router
      exact
    >
      <v-list-item-action>
        <v-icon>{{ notification.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>{{ notification.clubName }}</v-list-item-title>
        <v-list-item-subtitle>{{ notification.contents }}</v-list-item-subtitle>
        <v-list-item-subtitle>{{ notification.time }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="true" style="font-size: 13px" app>
      <span
        >&copy; {{ new Date().getFullYear() }} WCD Capstone Design Teams</span
      >
    </v-footer>
  </v-app>
</template>

<script>
export default {
  components: {  },
  name: "DefaultLayout",
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "WCD Capstone Design Team",
      items: [
        {
          icon: "mdi-home-circle",
          title: "Home",
          to: "/",
        },
        {
          icon: "mdi-account",
          title: "My Profile",
          to: "/myprofile",
        },
        {
          icon: "mdi-list-box-outline",
          title: "My Club",
          to: "/myclub",
        },
        {
          icon: "mdi-magnify",
          title: "Search",
          to: "/club-search",
        },
        {
          icon: "mdi-plus",
          title: "Create",
          to: "/club-create",
        },
        {
          icon: "mdi-cog",
          title: "Settings",
          to: "/settings",
        },
      ],
      notifications: [
        {
          icon: "mdi-panorama-variant-outline",
          clubName: "Club1",
          contents: "새로운 모임원이 가입했습니다.",
          time: "2023-02-01",
          to: "/club/1",
        },
        {
          icon: "mdi-panorama-variant-outline",
          clubName: "Club2",
          contents: "새로운 공지가 등록되었습니다.",
          time: "2023-02-01",
          to: "/club/2",
        },
        {
          icon: "mdi-panorama-variant-outline",
          clubName: "Club3",
          contents: "contents example",
          time: "2023-02-01",
          to: "/club/3",
        },
      ],
    };
  },
};
</script>
