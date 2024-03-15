export type Order = {
    codigo: number
    id_produto: number
    id_cliente: number
    valor: number
    mesa: number
    status: 'pendente' | 'em andamento' | 'finalizado'
}