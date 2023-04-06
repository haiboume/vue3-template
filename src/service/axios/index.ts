import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { VendeConfig } from './types'
import { useLoading } from '@/global/loading'
import { useError } from '@/global/error'

const { loadingToggle } = useLoading()
const { errorCatch } = useError()

class VendeRequest {
  instance: AxiosInstance

  constructor(vende: VendeConfig) {
    this.instance = axios.create(vende.config)

    /**
     * 实例拦截器
     */
    this.instance.interceptors.request.use(
      vende.interceptors?.request_interceptor,
      vende.interceptors?.request_interceptor_catch
    )

    this.instance.interceptors.response.use(
      vende.interceptors?.response_interceptor,
      vende.interceptors?.response_interceptor_catch
    )

    /**
     * 全局拦截器
     */
    this.instance.interceptors.request.use(
      (config) => {
        loadingToggle(true)
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        const { config, status } = res
        const buzzReg = /buzz/
        if (config.url) {
          if (buzzReg.test(config.url)) {
            if (status < 200 || status >= 300) {
              errorCatch({
                type: 'data',
                _error: 'Network Error!'
              })
            } else {
              if (res.data.error) {
                errorCatch({
                  type: 'data',
                  _error: res.data.error
                })
              }
            }
          }
          return res.data
        }
      },
      (err) => err
    )
  }

  /**
   * 实例方法
   */
  request<T>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => resolve(res))
        .catch((err) => reject(err))
        .finally(() => loadingToggle(false))
    })
  }

  get<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }
}

export { VendeRequest }
