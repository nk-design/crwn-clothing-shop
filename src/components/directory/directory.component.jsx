import "./directory.styles.scss"
import DirectoryItem from "../directory-item/directory-item.component"

const Directory = ({categories}) => {
    return <div className="directory-container">
      {categories.map((categories)=>{
       return <DirectoryItem key={categories.id} categories={categories}/>
      })}
    </div>
}

export default Directory;