const state = {
  country: [],
};

const getters = {
  getCountry: (state) => {
    console.log("get country");
    console.log(state.country);
    return state.country;
  },
};

const mutations = {
  setCountry(state, data) {
    console.log("data");
    console.log(data);
    state.country = data;
  },
};

const actions = {
  setMyCountry({ commit }, country) {
    console.log("country");
    console.log(country);
    commit("setCountry", country);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
