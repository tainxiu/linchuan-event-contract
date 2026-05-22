<script setup>
import { withBase } from 'vitepress'

function goBack() {
  if (window.history.length > 1) {
    window.history.back()
    return
  }

  window.location.href = withBase('/')
}
</script>

<template>
  <button class="page-back-button" type="button" @click="goBack">
    返回上一页
  </button>
</template>
