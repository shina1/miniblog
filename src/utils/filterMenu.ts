interface araryItem{
    id: number,
    name: string,
    category: string,
    image: string,
}
type filterParams = {
    category: string,
    setData: React.Dispatch<any>
    array: araryItem[]
}

export const filterByCategory = ({category, setData, array}:filterParams) => {
    setData(
        array.filter((item) => {
            return item.category === category
        })
    )
}