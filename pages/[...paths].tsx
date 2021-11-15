import { GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/dist/client/router'
import * as React from 'react'

export interface PathsPageProps {}

const PathsPage = (props: PathsPageProps) => {
  const router = useRouter()
  return <></>
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PathsPageProps> = async (
  context: GetStaticPropsContext
) => {
  return {
    notFound: true,
  }
}
export default PathsPage
