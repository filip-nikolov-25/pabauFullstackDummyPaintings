 export interface Painting { 
    id: number
    name: string
    description: string
    price: string
    image: null
   
}
export interface NavbarProps {
    setIsAddingPainting:(value:boolean) => void
}