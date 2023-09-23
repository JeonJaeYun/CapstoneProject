<template>
    <v-card style="width:50%; margin:10px;"
      ><v-card-title
        >{{ title }}<v-spacer /> <v-btn>더보기</v-btn></v-card-title
      ></v-card
    >
  </template>

<script>
export default {
  name: "NoticeCard",
  data() {
    return {
      title: "공지사항",
    };
  },
};
</script>