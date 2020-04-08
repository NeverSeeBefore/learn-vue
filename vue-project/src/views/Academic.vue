<template>
  <div class="about">
    <ul>
      <li v-for="question in questionList" :key="question.id">
        <router-link :to="{path: '/question/' + question.id}">{{question.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questionList: [
        {
          title: "questionTitlequestionTitle",
          id: "122343"
        },
        {
          title: "nTitleonTquestiquestionTitleonTitle",
          id: "123313"
        },
        {
          title: "TitleTitleTitlequestionTitle",
          id: "123112"
        }
      ]
    };
  }
};
</script>
