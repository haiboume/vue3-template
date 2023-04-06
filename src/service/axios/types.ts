import { AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse } from 'axios'

interface PrivateInterceptors<T = AxiosResponse> {
  request_interceptor: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  request_interceptor_catch: (err: any) => any
  response_interceptor: (res: T) => T
  response_interceptor_catch: (err: any) => any
}

interface VendeConfig {
  config: AxiosRequestConfig
  interceptors?: PrivateInterceptors
}

export { VendeConfig }
