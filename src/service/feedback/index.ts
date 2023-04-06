import { VendeRequest } from '../axios'

const feedbackRequest = new VendeRequest({
  config: {
    timeout: 2000
  },
  interceptors: {
    request_interceptor: (config) => config,
    request_interceptor_catch: (err) => err,
    response_interceptor: (res) => res,
    response_interceptor_catch: (err) => err
  }
})

export { feedbackRequest }
