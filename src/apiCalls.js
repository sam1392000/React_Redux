export const getAllProducts = () => {
    return fetch("https://fakestoreapi.com/products")
            .then((data) => {
                return data.json();
            } )
            .catch(err => console.log(err));
}

export const get_a_single_product = (productId) => {
    return fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(data => {
                return data.json();
            })
            .catch(err => {
                console.log(err);
            })
}