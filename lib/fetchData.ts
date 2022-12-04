const fetchData = async (id: string) => {
  const url = process.env.CMS_URL + id

  let res
  try {
    res = await fetch(url)
  } catch (err) {
    console.error(err)
    return
  }

  if (!res.ok) return null
  const data = await res.text()

  return data
}

export default fetchData
