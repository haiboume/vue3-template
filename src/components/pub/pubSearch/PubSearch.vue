<script lang="ts" setup>
import { ref } from 'vue'

interface IEmits {
  (e: 'keyboardEvent', value: string): void
}

const emits = defineEmits<IEmits>()

const searchVal = ref('')
const placeholder = ref('Search')
const searchRef = ref()

const blurChange = () => {
  placeholder.value = 'Search'
  searchVal.value = ''
}

const focusChange = () => {
  placeholder.value = ''
}

const submit = (e: any) => {
  if (e.keyCode === 13) {
    e.preventDefault()
    if (searchVal.value.trim() !== '') {
      emits('keyboardEvent', searchVal.value)
    }
    // 关闭软键盘
    searchRef.value.blur()
  }
}
</script>

<template>
  <input
    v-model.trim.lazy="searchVal"
    :placeholder="placeholder"
    class="search-box"
    type="search"
    @blur="blurChange"
    @focus="focusChange"
    @keyup="submit"
    ref="searchRef"
  />
</template>

<style lang="less" scoped>
.search-box {
  width: 100%;
  height: 29px;
  border-radius: 5px;
  padding: 0 15px 0 25px;
  background-image: url('@/assets/img/search.png');
  background-size: 12px;
  background-repeat: no-repeat;
  background-position: top 8px left 8px;
  border: 1px #b9b9b9 solid;
  box-sizing: border-box;
  outline: none;
  font-size: 12px;
}
</style>
