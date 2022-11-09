export default function Cart({ items }) {
    return (
        <div style={{
            paddingTop: 50,
            marginRight: '20%',
        }}>
            {items.map((item, idx) => (
                <div
                    style={{ width: '100%', }}
                >
                    <h2 style={{ color: 'gray' }}>{item.title}</h2>
                </div>
            ))}
            <h1>${
                items.reduce((accumulator, object) => {
                    return accumulator + object.price;
                }, 0).toFixed(2)}
            </h1>
        </div>
    )
}