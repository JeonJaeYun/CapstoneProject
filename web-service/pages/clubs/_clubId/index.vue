<template>
  <div style="width: 100%">
    <ClubNavigation />
    <div style="color: white; display: flex; flex-direction: row">
      <LeftClubNav />
      <div style="width: 100%; padding: 20px">
        <div class="d-flex">
          <MyClubCard />
          <MyClubCard />
        </div>
        <div class="d-flex">
          <MyClubCard />
          <MyClubCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftClubNav from "../../../components/LeftClubNav.vue";
import ClubNavigation from "../../../components/ClubNavigation.vue";
import MyClubCard from "../../../components/MyClubCard.vue";

export default {
  components: {
    ClubNavigation,
    LeftClubNav,
    MyClubCard,
  },
};
</script>