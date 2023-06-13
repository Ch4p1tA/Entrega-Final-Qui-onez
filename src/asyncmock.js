const productos = [
    { nombre: "Remera mujer", precio: 50000, id: "1", stock:7, img: "https://d368r8jqz0fwvm.cloudfront.net/17735-product_lg/remera-de-mujer-isela.jpg", idCat: "1" },
    { nombre: "Remera hombre", precio: 50000, id: "2", stock:12, img: "https://www.blowland.com.ar/1933-thickbox_default/adidas-originals-remera-lifestyle-hombre-trefoil-azul-blanco-.jpg", idCat: "1" },
    { nombre: "Zapatillas mujer", precio: 25000, id: "3", stock:15, img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/zapatilla-adidas-ultraboost-22-01-copia-1638440724.jpg", idCat: "2" },
    { nombre: "Zapatillas hombre", precio: 30000, id: "4", stock:5, img: "https://media.revistagq.com/photos/61c2de94b7c23f7574936287/3:2/w_2423,h_1615,c_limit/GettyImages-547185492.jpg", idCat: "2" },
];

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
};

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
};

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout(()=>{
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}
