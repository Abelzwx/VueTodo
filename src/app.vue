<template>
    <div id="app">
        <div class="app-bg">
            <img src="./assets/images/bg.jpg"/>
        </div>
        <Header></Header>
        <Todo></Todo>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "./todo/header.vue";
import Footer from "./todo/footer.jsx";
import Todo from "./todo/todo.vue";

export default {
  components: {
    Header,
    Footer,
    Todo
  }
};
</script>

<style lang="less" scoped>
#app {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.app-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #555;
  z-index: -1;
  img {
    width: 100%;
  }
  ::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: 0.2;
  }
}
</style>
