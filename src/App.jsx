import './App.css'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product';
import Cart from './pages/Cart'
const data = [
  {
    id: 1,
    img: "/images/machine.jpg",
    title: '커피 자판기',
    Desc: '중고 부터 새 상품까지 다양하게 상담 후 고객님이 원하는 가격의 견적으로 자판기를 만들어 드립니다. '
  },
  {
    id: 2,
    img: '/images/coffee2.jpg',
    title: '커피',
    Desc: '커피 등등의 다양한 부수기제 판매 ',
  },
  {
    id: 3,
    img: '/images/coffee2.jpg',
    title: '한국유통',
    Desc: '고장난 자판기도 구매합니다 중고 자판기를 세척하여 값싸고 잘 작동되는 자판기로 만들어 줍니다.',
  }
];
function App() {
  return (
    <div>
      <Home data={data} />
      {/* <ProductList/> */}
      {/* <Product></Product> */}
      {/* <Cart/> */}
    </div>
  )
}

export default App
