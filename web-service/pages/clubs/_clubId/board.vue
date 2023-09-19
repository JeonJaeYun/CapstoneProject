<template>
    <div style="width:100%">
      <ClubNavigation />
      <div
        style="
          color: white;
          display: flex;
          flex-direction: row;
        "
      >
        <LeftClubNav />
      </div>
    </div>
  </template>
  
  <script>
  import LeftClubNav from "../../../components/LeftClubNav.vue";
  import ClubNavigation from "../../../components/ClubNavigation.vue";
  
  export default {
    components: {
      ClubNavigation,
      LeftClubNav,
    },
  };
  </script>