import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import api from '../services/api'

export default function ProductsPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    api.get('/products').then(res => setProducts(res.data))
  }, [])

  return (
    <div className="container mx-auto py-10 grid grid-cols-4 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
