<template>
  <div class="layout layout--work">
    <PageHeader title="Work" />
    <main class="main" id="main" role="main">
      <ul class="work-list">
        <WorkListItem
          v-for="(project, index) in projects"
          :project="project"
          :key="index"
          :index="index"
        />
      </ul>
    </main>
  </div>
</template>
<script>
import PageHeader from "~/components/PageHeader";
import WorkListItem from "~/components/WorkListItem";
export default {
  transition: "work-list-page",
  components: { PageHeader, WorkListItem },
  computed: {
    projects() {
      return this.$store.state.projects.projects;
    }
  },
  async fetch({ store, params }) {
    await store.dispatch("projects/getProjects", params.slug);
  }
};
</script>
