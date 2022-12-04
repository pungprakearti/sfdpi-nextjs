import fetchData from "./fetchData"

const staticPropsGen = async () => {
  // Get text data
  let slugMap: Record<string, string> = {}
  if (process.env.SLUG_MAP) slugMap = JSON.parse(process.env.SLUG_MAP)

  let contentMap: Record<string, string[]> = {}
  for (let key in slugMap) {
    const content = await fetchData(slugMap[key])
    if (content) {
      contentMap[key] = content.replaceAll("\r", "").split("\n")
    }
  }

  let imageMap: Record<string, string> = {}
  if (process.env.NEXT_PUBLIC_IMAGE_MAP) {
    imageMap = JSON.parse(process.env.NEXT_PUBLIC_IMAGE_MAP)
  }

  return { contentMap, imageMap }
}

export default staticPropsGen
