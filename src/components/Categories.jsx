import styled from 'styled-components';
import { categoryData } from '../data';
import CategoryItem from './CategoryItem';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`


const Categories = () => {
  return (
    <Container>
        {categoryData.map(category => (
          <CategoryItem item = {category} key = {category.id}/>
        ))}
    </Container>
  )
}

export default Categories