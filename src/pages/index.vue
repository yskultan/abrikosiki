<template>
  <div class="index">
    <img :src="logoSrc" class="index__logo" />
    <span class="index__title">Сайт в разработке</span>
    <span class="index__subtitle">Пока вы можете посмотреть наши аккаунты в соц.сетях:</span>
    <a href="https://instagram.com/abrikosiki.krsk">instagram.com/abrikosiki.krsk</a>
    <a href="https://vk.com/abrikosiki.krsk">vk.com/abrikosiki.krsk</a>
    <span class="index__subtitle">и связаться с нами по телефону:</span>
    <a href="tel:89131794086">8 (913) 179-40-86</a>
  </div>
</template>

<script>
/* eslint-disable */
import logoSrc from '~/assets/img/logo.jpeg';

export default {
  name: 'index',
  layout: 'index',
  data() {
    return {
      logoSrc,
    };
  },
};
</script>

<style lang="scss">
.index {
  display: flex;
  flex-direction:column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items:center;
  &__title {
    margin-bottom: 30px;
  }
  &__subtitle {
    margin-bottom: 10px;
    margin-top: 10px;
  }
  &__logo {
    width: 150px;
    height: 150px;
    padding: 15px;
  }
  & a {
    margin: 2px 0;
  }
}
</style>