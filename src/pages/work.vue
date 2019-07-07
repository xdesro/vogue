<template>
  <div>
    <!-- <div class="container"> -->
    <header class="header">
      <div class="container">
        <h1 class="header__title">Work—</h1>
      </div>
    </header>
    <main class="main">
      <ul class="work-list">
        <li class="work-list__item" v-for="i in 2" :key="i">
          <span class="work-list__counter">0{{i}}</span>
          <p class="work-list__title">Blackletter — Personal Site &amp; Portfolio</p>
          <img class="work-list__image" src="https://placehold.it/345x260" />
          <div class="work-list__details">
            <p class="work-list__contribution">Design &amp; Development</p>
            <p class="work-list__date">Summer 2019</p>
          </div>
          <p
            class="work-list__excerpt"
          >Unsatisfied with my two years out-of-date personal site and its ability to showcase my creative development ability, I endeavored to redesign with an updated aesthetic, fluid page transitions, and modern technology like Vue.js and WebGL.</p>
          <a class="work-list__link" href="#">view the project—</a>
        </li>
      </ul>
    </main>
  </div>
</template>
