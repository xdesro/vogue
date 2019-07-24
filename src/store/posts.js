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
      order: "-fields.publishDate"
    });
    if (response.items.length > 0) {
      response.items.forEach(item => {
        item.fields.slug = `writing/${item.fields.slug}`;
        console.log(item.fields.slug);
      });
      commit("setPosts", response.items);
    }
  }
};
