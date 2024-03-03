export type ProductREQ = Product[]

export interface Product {
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
}
