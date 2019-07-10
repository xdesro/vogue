import { createClient } from "~/plugins/contentful";
const client = createClient();

export const state = () => ({
  posts: []
});

export const mutations = {
  setPosts(state, payload) {
    state.posts = payload;
  }
};

export const actions = {
  async getPosts({ commit }) {
    const response = await client.getEntries({
      content_type: "blogPost",
      order: "-sys.createdAt"
    });
    if (response.items.length > 0) {
      commit("setPosts", response.items);
    }
  }
};
