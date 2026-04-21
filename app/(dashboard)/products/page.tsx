import { ProductCard } from '@/app/components/ProductCard'

const count = 25

const ProductsPage = () => {
  return (
    <div className='products'>
      <div className='products__title-select--wrapper'>
        <h1 className='products__title'>Продукты / {count}</h1>
        <div className='products__select--wrapper'>
          <span>Тип:</span>
          <select className='form-select products__select' defaultValue=''>
            <option value=''>Тип продукта</option>
            <option value='1'>Мониторы</option>
            <option value='2'>Клавиатуры</option>
            <option value='3'>Мышки</option>
          </select>
        </div>
      </div>
      <ProductCard />
    </div>
  )
}

export default ProductsPage
