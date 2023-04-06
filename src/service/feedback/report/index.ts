import { feedbackRequest } from '../index'
import { IPageviewRequest, IPageviewResponse, IAdsenseInfoRequest, IAdsenseInfoResponse } from './types'

const reportPageviewInfo = (params: IPageviewRequest) =>
  feedbackRequest.get<IPageviewResponse>({
    url: 'https://analytics.sve.cc/v1/report/page',
    params
  })

const reportAdsenseInfo = (params: IAdsenseInfoRequest) =>
  feedbackRequest.get<IAdsenseInfoResponse>({
    url: 'https://analytics.sve.cc/v1/report',
    params
  })

export { reportPageviewInfo, reportAdsenseInfo }
