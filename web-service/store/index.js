// store/index.js

export const state = () => ({
  access_token: null,
  user_id: null,
});

export const mutations = {
  setAccessToken(state, access_token) {
    state.access_token = access_token;
  },
  setUserId(state, user_id){
    state.user_id = user_id;
  }
};

export const actions = {
  // 필요한 경우 다른 액션 추가
};

export const getters = {
  accessToken: state => state.access_token,
};