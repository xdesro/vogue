import { createClient } from "~/plugins/contentful";
const client = createClient();

export const state = () => ({
  person: {}
});

export const mutations = {
  setPerson(state, payload) {
    state.person = payload;
  }
};

export const actions = {
  async getPerson({ commit }) {
    const response = await client.getEntries({
      content_type: "person",
      include: 2
    });
    commit("setPerson", response.items[0]);
  }
};
