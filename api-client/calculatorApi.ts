import { CalculatorInput, CalculatorResponse } from '@/models/comon'
import axiosClient from './axiosClient'

export const calculatorApi = {
  get(data: CalculatorInput): Promise<CalculatorResponse> {
    const url =
      '/calculate?' + `bill=${data.bill}&people=${data.personCount}&tipPercent=${data.tip}`
    return axiosClient.get(url)
  },
}
