import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

const Rating = ({ value }) => {
  return (
    <div className="flex text-yellow-400">
      {[...Array(5)].map((_, i) => {
        const index = i + 1
        return (
          <span key={i}>
            {value >= index ? (
              <FaStar />
            ) : value >= index - 0.5 ? (
              <FaStarHalfAlt />
            ) : (
              <FaRegStar />
            )}
          </span>
        )
      })}
    </div>
  )
}

export default Rating