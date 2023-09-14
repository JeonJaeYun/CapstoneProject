<template>
  <div class="centered-content">
    <v-card style="width: 80%">
      <v-card-title class="d-flex justify-center">
        <h1 style="padding: 30px">CLUB CREATE</h1>
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
          :rows="3"
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
          @keyup.enter="addTag"
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
          ref="fileInput"
          label="이미지 업로드"
          v-model="multipartFile"
          prepend-icon="mdi-camera"
          accept="image/*"
          style="width: 40%"
        ></v-file-input>
        <v-card-actions>
          <v-btn style="color: rgb(255, 125, 125)" to="/">취소</v-btn>
          <v-btn
            type="submit"
            @click="CreateClubSubmit"
            style="color: rgb(125, 255, 125)"
            >생성</v-btn
          >
        </v-card-actions>
      </v-card-text>
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
        "기타",
      ],
      approvalMethods: ["FREE", "APPROVAL"],
      multipartFile: null, // 이미지 파일
      clubName: "", // 모임 이름
      category: "", // 카테고리
      description: "", // 모임 설명
      approvalMethod: "", // 승인 방식
      maximumPeople: "", // 모임 인원
      tagInput: "",
      tagList: [], // 태그 리스트
    };
  },
  methods: {
    async CreateClubSubmit() {
      const formData = new FormData();
      formData.append("multipartFile", this.multipartFile);
      formData.append("clubName", this.clubName);
      formData.append("category", this.category);
      formData.append("description", this.description);
      formData.append("approvalMethod", this.approvalMethod);
      formData.append("maximumPeople", this.maximumPeople);

      this.tagList.forEach((tag) => {
        formData.append(`tagList`, tag);
      });

      try {
        if (
          !this.clubName ||
          !this.category ||
          !this.description ||
          !this.approvalMethod ||
          !this.maximumPeople ||
          this.tagList.length === 0
        ) {
          alert("필수 정보를 모두 입력하세요.");
          return;
        }

        const access_token = this.$store.state.access_token;

        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${access_token}`,
          },
        };

        await this.$axios
          .post("/club-service/clubs", formData, config)
          .then((res) => {
            console.log(res);
            alert("모임이 생성되었습니다.");
            this.$router.push("/");
          });
      } catch (err) {
        console.log(err);
      }
    },
    addTag() {
      if(this.tagInput.trim() !== ""){
        this.tagList.push(this.tagInput.trim());
        this.tagInput = ""
      }else{
        alert("태그를 입력하세요.")
      }
    },

    removeTag(index) {
      this.tagList.splice(index, 1);
    },
  },
  watch: {
    tagList: {
      handler(newTags) {
        console.log('tags이 변경되었습니다:', newTags);
      },
      deep: true, // 중첩된 객체 또는 배열을 감시하려면 deep 옵션을 true로 설정
    },
    formData:{
      handler(newData){
        console.log("asdf", newData)
      },
      deep:true
    }
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