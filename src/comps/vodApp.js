import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Header from './header'
import Item from './item';

export default function VodApp(props) {
    const [ar, setAr] = useState([]);
    const [loading, setLoading] = useState(false);
    const [flag, setFlag] = useState(false);
    let { s, y } = useParams();
    // useEffect(() => {
    // doApi();
    // }, [])

    useEffect(() => {
        doApi();
    }, [s, y])

    const doApi = async () => {
        setLoading(true);
        setAr([])
        let url = `https://www.omdbapi.com/?s=${s || "bank"}&y=${y}&apikey=7fdfd8cd`
        let resp = await axios.get(url)
        let tempAr = resp.data.Search || [];
        tempAr = tempAr.filter(t => t.Poster != 'N/A')
        setAr(tempAr);
        setFlag(!tempAr.length ? true : false)
        setLoading(!tempAr.length ? true : false)
        setLoading(false);
    }
    return (
        <div style={{ minHeight: '100vh' }} className='container-fluid p-0 bg-dark vopApp'>
            <Header />
            <div>
                <img style={{ width: '100%', height: '75vh' }} src='https://images.pexels.com/photos/8263322/pexels-photo-8263322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img>
            </div>
            <div className='row p-3 mx-auto bodyCss' >
                <div className='d-flex justify-content-center mt-2'>
                    {loading && <img style={{ height: '60px', width: '80px', marginTop: '48px' }} src='https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif'></img>}
                </div>
                {flag && !loading && <h2 className='text-white text-center mt-5'>THERE IS NOT RESULTS <img style={{ height: '60px', width: '80px' }} src='https://www.yo-yoo.co.il/coolpics/images/uploads/yellow2.png'></img></h2>}

                {ar.map((item) => {
                    return (
                        <Item key={item.Poster} item={item} />
                    )
                })}
            </div>
            <footer style={{fontSize:'1.5em', padding:'0 48px'}}>
                yarden shirian 2022
            </footer>
        </div>

    )
}
