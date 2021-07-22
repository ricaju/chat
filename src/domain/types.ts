
type Author = {
  name: string
  picture: string
}

export type Comment = {
  id: string
  parent_id?: string
  author: Author
  text: string
  timestamp: number
}