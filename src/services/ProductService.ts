import axios from "axios";
export default class ProductService {
    getProducts(){
        return axios.get("http://localhost:8001/api/products/getAll");
    }

    getByProductName(productName: string) {
        return axios.get(`http://localhost:8001/api/products/getByProductName?productName=${productName}`)
    }
}