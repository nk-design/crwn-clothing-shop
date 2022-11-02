import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ categories }) => {
  const { imageUrl, title } = categories;
  const navigate = useNavigate();

  return (
    <DirectoryItemContainer onClick={()=>navigate(`/shop/${title}`)}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;