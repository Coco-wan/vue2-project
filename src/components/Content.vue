<template>
    <div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>
<style>
      .content {
        overflow: auto;
        position: absolute;
        top: 55px;
        right: 0;
        bottom: 50px;
        left: 0;
        z-index: 100;
        -webkit-overflow-scrolling : touch;
    }
</style>
<script>
</script>
