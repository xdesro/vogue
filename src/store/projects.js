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
      order: "-fields.date"
    });
    if (response.items.length > 0) {
      response.items.forEach(item => {
        item.fields.slug = `work/${item.fields.slug}`;
      });
      commit("setProjects", response.items);
    }
  }
};
