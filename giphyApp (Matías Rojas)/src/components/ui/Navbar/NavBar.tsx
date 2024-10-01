import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { setGifts } from '../../../redux/slices/gift';

const API_KEY = import.meta.env.VITE_API_KEY

export const NavBar = () => {
    const dispatch = useAppDispatch()
    const fetchGift = async (query:string)=>{
        try{
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=12&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
            const data = await response.json();
            const parseData = data.data.map((el:any)=>({
                urlGift : el.images.fixed_height.url,
                title: el.title,
            }))
            dispatch(setGifts(parseData))
        }catch(error){
            console.warn(error);
        }
    }

    const [queryInput, setQueryInput] = useState('')
    const submit = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        fetchGift(queryInput);
    }
    return (
            <Navbar className="bg-body-tertiary justify-content-center">
                <Form onSubmit={submit}>
                    <Row>
                    <Col xs="auto">
                        <Form.Control
                            onChange={(e) => {
                                setQueryInput(e.target.value)
                            }}
                            type="text"
                            placeholder="Search"
                            className=" mr-sm-2"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit">Submit</Button>
                    </Col>
                    </Row>
                </Form>
            </Navbar>
    )
}
