import { Card, Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../description.css'

const Description = () => {

  const [products, setProducts] = useState({})
  const {id}=useParams();


  // Create function for fetching data //
  async function fetchProducts() {
    try {
      const response = await axios.get(`http://localhost:3000/products/${id}`)
      setProducts(response.data)
    console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  };

  // useing UseEffect //
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      <div className='product-card-container' style={{textAlign: "center", marginTop: "50px"}}>
      <Card className="card" style={{ width:"40%"}}>
                <Link to={"/Description"}><Card.Img variant="top" src={products.image} className="image" /></Link>
                <Card.Body>
                    <Card.Title className="title">{products.title}</Card.Title>
                    <Card.Text className="description">{products.description}</Card.Text>
                    <Card.Text className="category">Category: {products.category}</Card.Text>
                    <Card.Text className="price">Price: {products.price}</Card.Text>
                    <Card.Text className="rating">Rate: {products?.rating?.rate}</Card.Text>
                    <Button variant="primary" className="button">Add to Cart</Button>
                </Card.Body>
                
            </Card>
            </div>
    </div>
  )
}

export default Description
