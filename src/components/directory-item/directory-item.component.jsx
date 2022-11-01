import "./directory-item.styles.scss"

const DirectoryItem = ({categories}) => {
      return (
        <div className="directory-item-container">
          <div className="background-image" style={{
            backgroundImage: `url(${categories.imageUrl})`
          }}></div>
          <div className="directory-item-body-container">
            <h2>{categories.title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      )
}

export default DirectoryItem