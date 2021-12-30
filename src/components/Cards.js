import { Card } from "./Card"

export function Cards({tasks}) {
    return (
            tasks.map((elemento, index) => {
                return (
                    <Card
                        key={elemento.id}
                        card={elemento} />

                )
            })
    )
}