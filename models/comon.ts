import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

export interface CalculatorInput {
  bill: number | '',
  billErr: boolean,
  billErrText: string,

  tip: number | '',
  tipErr: boolean,
  tipErrText: string,

  personCount: number | '',
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
