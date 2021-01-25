<template>
    <div class="main-container">
        <left-side/>
        <right-side/>
    </div>
</template>

<script>
import LeftSide from './LeftSide'
import RightSide from './RightSide'

export default {
  name: 'App',
  components: {
    LeftSide, RightSide
  }
}
</script>

<style lang="scss">
    .main-container {
      display: flex;
    }
</style>