import { feedbackRequest } from '../index'

const sendFeedbackRequest = (params: any) =>
  feedbackRequest.post({
    url: 'https://api.eportalmobile.com/v1/app_feedback/post',
    params
  })

const sendUserInfoRequest = (data: any) =>
  feedbackRequest.post({
    url: 'https://api.sve.cc/stat/post',
    data: JSON.stringify(data)
  })

export { sendFeedbackRequest, sendUserInfoRequest }
