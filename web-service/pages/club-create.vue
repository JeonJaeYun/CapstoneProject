<template>
  <div class="centered-content">
    <v-card style="width: 80%">
      <v-card-title class="d-flex justify-center">
        <h1 style="padding: 20px">CLUB CREATE</h1>
      </v-card-title>
      <v-card-text>
        <div class="d-flex flex-row">
          <!-- 모임 이름 입력 -->
          <v-text-field
            label="모임 이름"
            v-model="clubName"
            style="margin-right: 30px"
          ></v-text-field>

          <!-- 카테고리 선택 -->
          <v-select
            :items="categories"
            label="카테고리를 선택하세요"
            v-model="category"
            item-text="name"
            item-value="name"
            return-object
            style="margin-left: 30px"
          >
            <option value="">카테고리를 선택하세요</option>
            <option
              v-for="selectedCategoryId in categories"
              :value="selectedCategoryId.name"
              :key="selectedCategoryId.id"
            >
              {{ selectedCategoryId.name }}
            </option>
          </v-select>
        </div>

        <!-- 모임 설명 입력 -->
        <v-textarea
          label="모임 설명"
          v-model="description"
          no-resize
        ></v-textarea>

        <!-- 승인방식 선택 -->
        <v-radio-group v-model="approvalMethod" label="승인방식">
          <v-radio
            v-for="option in approvalMethods"
            :key="option"
            :label="option"
            :value="option"
          >
          </v-radio>
        </v-radio-group>

        <!-- 모집인원 입력 -->
        <v-text-field
          label="모임 인원 [30 ~ 100]"
          type="number"
          v-model="maximumPeople"
          :rules="[
            (value) =>
              (value >= 30 && value <= 100) ||
              '인원은 30 ~ 100명 사이로 입력해주세요.',
          ]"
        ></v-text-field>

        <!-- 태그 입력 -->
        <v-text-field
          label="태그 입력"
          v-model="tagInput"
          @keyup.enter="addTag()"
          placeholder="태그를 입력 후 엔터를 누르세요."
        ></v-text-field>
        <v-chip-group>
          <v-chip
            v-for="(tag, index) in tagList"
            :key="index"
            class="mr-2"
            close
            @click="removeTag(index)"
          >
            {{ tag }}
          </v-chip>
        </v-chip-group>
        <v-file-input
          label="이미지 업로드"
          v-model="multipartFile"
          prepend-icon="mdi-camera"
          accept="image/*"
          @change="resizeImage"
          style="width: 40%"
        ></v-file-input>
      </v-card-text>
      <v-card-actions>
        <v-btn style="color: rgb(255, 125, 125)">취소</v-btn>
        <v-btn
          type="submit"
          @click="createClub"
          style="color: rgb(125, 255, 125)"
          >생성</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        "음악",
        "요리",
        "스포츠",
        "영화",
        "공예",
        "독서",
        "여행",
        "봉사활동",
        "언어교환",
        "예술",
      ],
      approvalMethods: ["FREE", "APPROVAL"],
    };
  },
};
</script>

<style scoped>
.centered-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
}
</style>