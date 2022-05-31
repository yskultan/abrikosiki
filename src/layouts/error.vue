<template>
  <div class="error-layout">
    <h2 class="error-layout__cat">
      {{ error.statusCode === 404 ? pageNotFound : otherError }}
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data () {
    return {
      pageNotFound: 'Такая страница не найдена',
      otherError: 'Что-то пошло не так',
    };
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style lang="scss">
.error-layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20vh;

  &__title {
    margin-bottom: 30px;
  }
  &__cat {
    margin-bottom: 30px;
  }
  &__button {
    width: 150px;
  }
}
</style>
