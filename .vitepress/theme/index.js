import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import PageBackButton from './components/PageBackButton.vue'
import './trader.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(PageBackButton)
    })
  }
}
