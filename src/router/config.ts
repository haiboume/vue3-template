import type { RouteRecordRaw } from 'vue-router'
import { getRandomString } from '@/utils/random'

const MainPage = () => import('@/views/main/MainPage.vue')

export const routes: readonly RouteRecordRaw[] = [
  {
    path: '/',
    redirect: `/main/${getRandomString(8)}1`
  },
  {
    path: '/main/:page',
    name: 'main',
    component: MainPage,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/search/:page',
    name: 'search',
    component: MainPage,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/about/:id',
    name: 'about',
    component: MainPage,
    meta: {
      keepAlive: false
    }
  }
]
