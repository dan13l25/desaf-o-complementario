import Product from "../models/product.js";

export default class ProductManager {
    constructor() {
        console.log("productmanager funciona") 
    }

    addProduct = async (title, description, price, thumbnails, code, stock, status, category, brand) => {
        try {
            const product = new Product({
                title,
                description,
                price,
                thumbnails,
                code,
                stock,
                status,
                category,
                brand
            });

            await product.save();
            console.log("Producto añadido:", product);
        } catch (error) {
            console.error("Error al añadir el producto:", error.message);
        }
    };

    readProducts = async () => {
        try {
            const products = await Product.find();
            return products;
        } catch (error) {
            console.error("Error al leer los productos:", error.message);
            return [];
        }
    };

    getProduct = async () => {
        try {
            const products = await this.readProducts();
            console.log("Productos:", products);
        } catch (error) {
            console.error("Error al obtener los productos:", error.message);
        }
    };

    getProductById = async (id) => {
        try {
            const product = await Product.findById(id);
            console.log("Producto encontrado:", product);
        } catch (error) {
            console.error("Error al obtener el producto:", error.message);
        }
    };

    getByBrand = async (brand) => {
        try {
            const products = await Product.find({ brand });
            console.log(`Productos de la marca ${brand}:`, products);
        } catch (error) {
            console.error("Error al obtener los productos por marca:", error.message);
        }
    };

    deleteProductById = async (id) => {
        try {
            await Product.findByIdAndDelete({_id:id});
            console.log("Producto eliminado");
        } catch (error) {
            console.error("Error al eliminar el producto:", error.message);
        }
    };

    updateProduct = async (id, newData) => {
        try {
            const updatedProduct = await Product.findByIdAndUpdate(id, newData, { new: true });
            console.log("Producto actualizado:", updatedProduct);
        } catch (error) {
            console.error("Error al actualizar el producto:", error.message);
        }
    };
}


