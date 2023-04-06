import { IBaseConfig } from '../types'

export const baseConfig: IBaseConfig = {
  base_url: process.env.NODE_ENV === 'production' ? '/' : 'https://quiz.top',
  app_id: '971de82a3f1e600b533f3b86aa28e952',
  web_title: 'quiz',
  name: 'demo'
}
