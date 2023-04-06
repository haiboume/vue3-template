import { createRouter, createWebHashHistory } from 'vue-router'
import { useTaboolaStore } from '@/store/taboola'
import { placement } from '@/global/placement'
import { routes } from './config'

const router = createRouter({
  routes,
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach(() => {
  const taboolaStore = useTaboolaStore()
  taboolaStore.initTaboola()
  placement.count = 1
})

export { router }
