interface IData {
  allow: boolean
}

export interface ICheckIPRes {
  success: string
  data: IData
  error?: string
}
