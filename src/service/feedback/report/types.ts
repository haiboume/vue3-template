export interface IPageviewRequest {
  type: 'page' | 'click' | 'call'
  pid: string
  uid: string
  dm: string
  qs: string
  lc: string
  ux: string
  tz: number
  ir: 1 | 0
  ct: number
}

export interface IPageviewResponse {
  success: string
  error: string
}

export interface IAdsenseInfoRequest extends IPageviewRequest {
  pm: string
  aid: string
  bd: string
  df?: number
}

export type IAdsenseInfoResponse = IPageviewResponse
