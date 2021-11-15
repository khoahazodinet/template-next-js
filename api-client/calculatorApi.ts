import { InputCalculator, OutputCalculator } from '@/models/comon'
import axiosClient from './axiosClient'

export const calculatorApi = {
  get(data: InputCalculator): Promise<OutputCalculator> {
    const url =
      '/calculate?' + `bill=${data.bill}&people=${data.personCount}&tipPercent=${data.tip}`
    return axiosClient.get(url)
  },
}
