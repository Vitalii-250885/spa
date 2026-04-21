import Image from 'next/image'
import { DeleteIcon } from './icons/DeleteIcon'

const title = 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
const serialNumber = 1234

const status = 'свободен'
const img = '/monitor.jpg'
const guarantee = {
  start: '2017-06-29',
  end: '2017-06-29',
}
const isNew = 'новый'
const price = [
  { value: 100, symbol: 'USD', isDefault: 0 },
  { value: 2600, symbol: 'UAH', isDefault: 1 },
]
const nameOfGroup =
  'Lorem ipsum dolor sit amet onsectetur adipisicing elit. Ratione, corporis.'
const name = 'Xристорождественский Александр'
const nameOfIncome =
  'Lorem ipsum, dolor sit amet onsectetur adipisicing elit. Consequatur, minus.'
const date = '2017-06-29'

export const ProductCard = () => {
  return (
    <div className='card product-card'>
      <div className='card-body product-card__body'>
        <div>
          <div className='product-card__marker'></div>
        </div>
        <div>
          <Image src={img} alt='product' width={50} height={40} />
        </div>
        <div>
          <div className='product-card__title'>{title}</div>
          <div className='product-card__sn'>SN-{serialNumber}</div>
        </div>
        <div className='product-card__status'>{status}</div>
        <div>
          <div>
            <span className='product-card__text'>c</span> {guarantee.start}
          </div>
          <div>
            <span className='product-card__text'>по</span> {guarantee.end}
          </div>
        </div>
        <div>{isNew}</div>
        <div>
          {price.map(({ value, symbol, isDefault }, index) => (
            <div key={index} className='product-card__price'>
              {value} {symbol}
            </div>
          ))}
        </div>
        <div className='product-card__name-of-group'>{nameOfGroup}</div>
        <div className='product-card__name'>{name}</div>
        <div className='product-card__name-of-income'>{nameOfIncome}</div>
        <div>{date}</div>
        <div>
          <DeleteIcon className='product-card__delete-icon' />
        </div>
      </div>
    </div>
  )
}
