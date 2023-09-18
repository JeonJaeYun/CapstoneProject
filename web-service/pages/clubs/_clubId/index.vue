<template>
  <div
    style="
      color: white;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: row;
    "
  >
    <LeftClubNav/>
    <div>
      <ClubNavigation/>
      <div>router view</div>
    </div>
  </div>
</template>

<script>
import LeftClubNav from '../../../components/LeftClubNav.vue';
import ClubNavigation from "../../../components/ClubNavigation.vue";

export default {
  components: {
    ClubNavigation,
    LeftClubNav,
  },
  
};
</script>
