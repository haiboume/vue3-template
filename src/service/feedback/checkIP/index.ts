import { feedbackRequest } from '../index'
import { ICheckIPRes } from './types'

const checkIpRequest = (pid: string) =>
  feedbackRequest.get<ICheckIPRes>({
    url: 'https://analytics.sve.cc/v1/config/ip',
    params: { pid }
  })

export { checkIpRequest }
