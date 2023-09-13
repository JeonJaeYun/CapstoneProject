<template>
  <div>
    <v-app dark>
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant="miniVariant"
        :mini-variant-width="miniVariantWidth"
        :clipped="clipped"
        fixed
        app
      >
        <v-list style="height: 100%">
          <div style="margin-bottom: 10px;">
            <v-list-item
              v-for="(home, i) in homes"
              :key="i"
              :to="home.to"
              router
              exact
              style="margin-bottom: 10px"
            >
              <v-list-item-action class="d-block mx-auto">
                <v-icon style="width: 100%">{{ home.icon }}</v-icon>
                <v-list-item-title
                  style="font-size: 12px; text-align: center"
                  >{{ home.title }}</v-list-item-title
                >
              </v-list-item-action>
            </v-list-item>
          </div>

          <div class="drawer-content" style="height:fit-content">
            <v-list-item
              v-for="(myclub, i) in myclubs"
              :key="i"
              :to="`/club/${myclub.clubId}`"
              router
              exact
            >
              <v-tooltip right>
                <template v-slot:activator="{ on }">
                  <v-list-item-action
                    v-on="on"
                    class="d-block mx-auto"
                    style="height: 45px"
                  >
                    <img class="image" :src="myclub.image" />
                  </v-list-item-action>
                </template>
                <span>{{ myclub.clubName }}</span>
              </v-tooltip>
            </v-list-item>
          </div>

          <div
            style="
              position: absolute;
              bottom: 0;
              width: 100%;
              text-align: center;
              margin-bottom:30px;
            "
          >
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :to="item.to"
              router
              exact
              class="d-block mx-auto"
              style="text-align: center"
            >
              <v-list-item-action>
                <v-icon style="width: 100%; display: block; margin: 0 auto">{{
                  item.icon
                }}</v-icon>
                <v-list-item-title style="font-size: 12px">{{
                  item.title
                }}</v-list-item-title>
              </v-list-item-action>
            </v-list-item>
          </div>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar :clipped-left="clipped" fixed app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-spacer />
        <div class="input-container">
          <v-icon class="icon">mdi-magnify</v-icon>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="검색어를 입력하세요..."
          />
        </div>
        <v-spacer />
        <v-btn style="color: rgb(255, 125, 125)" @click="logout">로그아웃</v-btn>
        <v-btn icon>
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
        <v-btn icon @click.stop="rightDrawer = !rightDrawer">
          <v-icon>mdi-bell</v-icon>
        </v-btn>
      </v-app-bar>
      <v-main>
        <v-container
          style="
            max-width: 100%;
            height:100%;
            padding: 30px;
            display: flex;
            justify-content: center;
          "
        >
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
            <v-list-item-action style="margin: 0; margin-right: 16px">
              <img class="image" :src="notification.image" />
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ notification.clubName }}</v-list-item-title>
              <v-list-item-subtitle>{{
                notification.contents
              }}</v-list-item-subtitle>
              <v-list-item-subtitle>{{
                notification.time
              }}</v-list-item-subtitle>
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
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: true,
      right: true,
      rightDrawer: false,
      miniVariantWidth: 80,
      homes: [
        {
          icon: "mdi-home-circle",
          title: "Home",
          to: "/",
        },
      ],
      notifications: [],
      myclubs: [
      {
          image: "https://cdn.pixabay.com/photo/2022/04/18/13/56/flower-7140631_1280.jpg",
          title: "Club 1",
        },
        {
          image: "https://cdn.pixabay.com/photo/2022/04/18/13/56/flower-7140631_1280.jpg",
          title: "Club 2",
        },
        {
          image: "https://cdn.pixabay.com/photo/2022/04/18/13/56/flower-7140631_1280.jpg",
          title: "Club 3",
        },
        {
          image: "https://cdn.pixabay.com/photo/2022/04/18/13/56/flower-7140631_1280.jpg",
          title: "Club 4",
        },
        {
          image: "https://cdn.pixabay.com/photo/2022/04/18/13/56/flower-7140631_1280.jpg",
          title: "Club 5",
        },
        {
          image: "https://cdn.pixabay.com/photo/2022/04/18/13/56/flower-7140631_1280.jpg",
          title: "Club 1",
        },
        {
          image: "https://cdn.pixabay.com/photo/2022/04/18/13/56/flower-7140631_1280.jpg",
          title: "Club 2",
        },
        {
          image: "https://cdn.pixabay.com/photo/2022/04/18/13/56/flower-7140631_1280.jpg",
          title: "Club 3",
        },
        
      ],
      items: [
        {
          icon: "mdi-plus",
          title: "Create",
          to: "/club-create",
        },
        {
          icon: "mdi-magnify",
          title: "Search",
          to: "/club-search",
        },
        {
          icon: "mdi-cog",
          title: "Settings",
          to: "/settings",
        },
      ],
    };
  },
  methods: {
    logout() {
      // Vuex에서 access_token 제거
      this.$store.commit('setAccessToken', null);

      // 세션 스토리지에서 refresh_token 제거
      sessionStorage.removeItem('refresh_token');

      // 로그아웃 후 필요한 추가 로직 작성

      // 예시로 홈 페이지로 리다이렉트하는 경우:
      this.$router.push('/login');
    },
    
    // ...
  },
};
</script>

<style>
/* 입력 필드와 아이콘을 감싸는 div를 정의 */
.input-container {
  display: flex;
  align-items: center;
  background-color: #333; /* 배경색 설정 */
  height: 40px;
  width: 400px;
  border-radius: 5px;
}

/* 아이콘 스타일 설정 */
.icon {
  padding: 0 10px; /* 아이콘과 입력 필드 사이 여백 조정 */
}

/* 입력 필드 스타일 설정 */
#search {
  width: 100%;
  height: 100%;
  flex: 1; /* 남은 공간을 채우도록 설정 */
  color: white; /* 입력 텍스트 색상 설정 */
}

#search:focus {
  background-color: black; /* 포커스 시 배경색 검정색으로 변경 */
  color: white; /* 글자색 변경 */
}

.image {
  width: 45px;
  height: 45px;
  border-radius: 5px;
}
.drawer-content {
  height: calc(100vh - 56px); /* 56px는 앱 바 높이 */
  overflow-y: auto; /* 세로 스크롤 활성화 */
}
.drawer-content::-webkit-scrollbar {
  width: 5px;
}

.drawer-content::-webkit-scrollbar-thumb {
  background-color: #888; /* 스크롤바 색상 */
  border-radius: 5px;
}

.drawer-content::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
</style>