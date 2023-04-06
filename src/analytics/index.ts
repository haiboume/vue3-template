import { useGtag } from 'vue-gtag-next'
import { gatgConfig } from '@/config'

const sendEvent = function (event: string) {
  useGtag().event(gatgConfig.event_name + ' ' + event, {
    event_category: gatgConfig.event_name,
    event_label: gatgConfig.event_name
  })
}

export { sendEvent }
