export type Order = {
    codigo: number
    id_produto: number
    id_cliente: number
    valor: number
    mesa: number
    data_venda: string
    hora_venda: string
    status: 'aguardando' | 'producao' | 'finalizado'
}