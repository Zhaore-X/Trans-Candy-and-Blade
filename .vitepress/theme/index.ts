import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }
  }
}