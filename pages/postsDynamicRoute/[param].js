import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { param, queryparam } = router.query

return <p>Post: {param} {queryparam}</p>
}

export default Post