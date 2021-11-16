import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

export interface CalculatorInput {
  bill: number | string,
  billErr: boolean,
  billErrText: string,

  tip: number | string,
  tipErr: boolean,
  tipErrText: string,

  personCount: number | string,
  personCountErr: boolean,
  personCountErrText: string,

  isCustomAvailable: boolean,
  fetchResponseErr: boolean,
  fetchResponseErrText: string,
}

export interface CalculatorResponse {
  result: boolean,
  amount: number,
  total: number,
}

export interface CalculatorOutput{
  amount: string,
  total: string,
  isFetching: boolean,
  fetchResponseErr: boolean,
  fetchResponseErrText: string,
}

export interface LayoutProps {
  children: ReactNode
}

export type NextPageWithLayout = NextPage & {
  Layout?: (props: LayoutProps) => ReactElement
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
