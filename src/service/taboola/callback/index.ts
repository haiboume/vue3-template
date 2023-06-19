import { VendeRequest } from '../../axios'

const taboolaRequest = new VendeRequest({
  config: { timeout: 60000 }
})

export const sendEventVisible = (url: string) => taboolaRequest.post({ url })
