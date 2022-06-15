export interface Pedido{
    id: string;
    cliente: Cliente;
    productos: ProductoPedido[];
    precioTotal: number;
    fecha: Date;
    valoracion:number;
}

interface ProductoPedido{
    producto: Producto;
    cantidad: number;
}

export interface Producto{
    id: string;
    nombre: string;
    cantidad: number;
    marca: string;
    categoria: string;
}

export interface Cliente{
    id:string;
    username: string;
    name:string;
}
