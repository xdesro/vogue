import { createClient } from "~/plugins/contentful";
const client = createClient();

export const state = () => ({
  currentProject: {},
  isLoading: true
});

export const mutations = {
  setCurrentProject(state, payload) {
    state.currentProject = payload;
  },
  setLoading(state, payload) {
    state.isLoading = payload;
  }
};

export const actions = {
  async getProjectBySlug({ commit }, slug) {
    commit("setLoading", true);
    const response = await client.getEntries({
      content_type: "project",
      "fields.slug": slug
    });
    commit("setCurrentProject", response.items[0]);
    commit("setLoading", false);
  }
};
