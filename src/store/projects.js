import { createClient } from "~/plugins/contentful";
const client = createClient();

export const state = () => ({
  projects: []
});

export const mutations = {
  setProjects(state, payload) {
    state.projects = payload;
  }
};

export const actions = {
  async getProjects({ commit }) {
    const response = await client.getEntries({
      content_type: "project",
      order: "-sys.createdAt"
    });
    if (response.items.length > 0) {
      commit("setProjects", response.items);
    }
  }
};
