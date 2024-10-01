import { FC } from "react"
import { Card } from "react-bootstrap"

interface IGift {
    urlGift: string,
    title: string
}
interface IPropsGiftCard{
    gift: IGift
}
export const CardGift: FC<IPropsGiftCard> = ({gift}) => {
    return (
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={gift.urlGift} />
            <Card.Body>
                <Card.Title>{gift.title}</Card.Title>
            </Card.Body>
        </Card>
    ) 
}
