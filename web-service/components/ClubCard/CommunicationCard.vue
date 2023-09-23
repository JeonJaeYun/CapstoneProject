<template>
  <v-card style="width: 50%; margin: 10px"
    ><v-card-title
      >{{ title }}<v-spacer /> <v-btn>더보기</v-btn></v-card-title
    ></v-card
  >
</template>

<script>
export default {
  name: "CommunicationCard",
  data() {
    return {
      title: "커뮤니케이션",
    };
  },
};
</script>