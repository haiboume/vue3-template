<template>
  <div class="stauts">
    <div class="icon">
      <div class="inner"></div>
      <span class="text">Loading</span>
    </div>
  </div>
</template>

<style scoped lang="less">
.stauts {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;

  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    padding: 10px 10px 0 10px;
    border-radius: 6px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.6);

    .inner {
      width: 40px;
      height: 40px;
      margin: 10px auto;
      background-image: url('@/assets/img/loading.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100%;
      transition-property: transform;
      transition-duration: 1s;
      animation: rotate 3s linear infinite;
    }

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }
    .text {
      font-size: 16px;
      color: #d1d1d1;
    }
  }
}
</style>
