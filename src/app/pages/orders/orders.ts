export type GET_PEDIDOS_RESPONSE = Order[]

export interface Order {
  id: string
  id_cliente: number
  mesa: number
  nome_cliente: string
  lista_carrinho: Cart[]
  data_venda: string
  form_pag: number
  entrega: boolean
  finalizado: boolean
}

export interface Cart {
  codigo: number
  codigo_interno?: number
  nome: string
  valor_venda: number
  valor_promo?: number
  descricao: string
  status: number
  id_categoria: number
  id_adicional?: number
  id_sabor?: number
  destaque?: number
  observacao?: string
  tamanho?: string
  imagem: string
  quantidade: number
  adicionais: Adicionais
}

export interface Adicionais {}

export interface SubjectOrder {
    order: Order | null
    orderNumberIndex: number
}
