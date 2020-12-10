const request = async (url) => {
  return  await fetch(url).then(response => response.json())
  
}
const main = async () => {
  const listOfBooks = await request('ListOfBooks.json')
}
main()
