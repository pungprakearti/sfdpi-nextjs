import staticPropsGen from "@/lib/staticPropsGen"

type Props = {
  contentMap: Record<string, string[]>
  imageMap: Record<string, string>
}

const Home: React.FC<Props> = ({ contentMap, imageMap }) => {
  console.log(contentMap, imageMap)

  return <div className='container'>hi</div>
}

export async function getStaticProps() {
  const props = await staticPropsGen()

  return {
    props: {
      ...props,
    },
  }
}

export default Home
