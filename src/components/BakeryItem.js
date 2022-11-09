export default function BakeryItem({ item, addToCart }) {
    const { name, description, price, image } = item

    return (
        <div style={{
            width: 400,
            height: 'auto',
            border: 'solid 2px gray',
            borderRadius: 10,
            marginTop: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <img src={image} style={{ width: '100%' }} />
            <h1>{name}</h1>
            <p>{description}</p>
            <h2>${price}</h2>
            <button
                style={{
                    width: 150,
                    height: 30,
                    backgroundColor: 'lightblue',
                    border: 'none',
                    borderRadius: 8,
                    marginBottom: 10
                }}
                onClick={() => {
                    addToCart({
                        title: name,
                        price: price
                    })
                }}
            >
                ADD TO CART
            </button>
        </div>
    )
}