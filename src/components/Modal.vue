<template>
  <div class="modal" v-show="isActive" :class="{ 'is-active': isActive }">
    <div class="modal-background" v-if="backdrop" @click="backdropClose">X</div>
    <button @click="backdropClose">XXX</button>
    <div>header</div>
    <div>body</div>
    <div>footer</div>
  </div>

</template>

<script>
  export default {
    props: {
      isShow: false,
      backdrop: true,
      backdropClosable: true,
    },
    data() {
      return {
        isActive: false,
        title: 'Title',
        body: 'Body',
        footer: 'Footer'
      }
    },
    mounted() {
      this.$nextTick(() => {
        document.body.appendChild(this.$el);
        if (this.isShow) {
          this.active();
        }
      });
    },
    beforeDestroy() {
      this.$el.remove();
    },
    watch: {
      isShow(val) {
        this.isActive = val;
        if (!val && this.isLoading) {
          this.isLoading = false;
        }
      },
    },
    methods: {
      handleCancel() {
        this.handleClose();
      },
      handleClose() {
        console.log('emit');
        this.$emit('close');
      },
      backdropClose() {
        console.log('here');
        this.handleCancel();
      },
      active() {
        this.isActive = true;
      },
    },
  }
</script>

<style scoped="scoped" lang="scss">
  .modal {
    width: 100%;
    height: 100%;
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: lightblue;
  }
</style>
