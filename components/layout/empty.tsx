import { LayoutProps } from '@/models/comon'
import React from 'react'
import PropTypes from 'prop-types'

const EmptyLayout = ({ children }: LayoutProps) => {
  return <div>{children}</div>
}

EmptyLayout.propTypes = {}

export default EmptyLayout
