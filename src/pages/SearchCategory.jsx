import { useParams } from "react-router-dom"

const SearchCategory = () => {
    const {category} = useParams()
  return (
    <div>{category}</div>
  )
}

export default SearchCategory