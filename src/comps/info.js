import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function Info() {
    const { id } = useParams();
    const [info, setInfo] = useState({});
    const [stars, setStars] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        doApi();
    }, [])

    useEffect(() => {
        makeStars();
    }, [info])

    const doApi = async () => {
        setLoading(true);
        let url = `https://www.omdbapi.com/?i=${id}&apikey=7fdfd8cd`
        let resp = await axios.get(url)
        let d = resp.data;

        let tempinfo = { name: d.Title, img: d.Poster, year: d.Year, info: d.Plot, genre: d.Genre, actors: d.Actors, rate: +(d.Ratings[0].Value).slice(0, 3) }
        setInfo(tempinfo);
        setLoading(false);
    }

    const makeStars = () => {
        setStars([]);
        let stars = [];
        for (let index = 0; index < info.rate; index++) {
            stars.push(<div className='text-white '><img width={22} src='/images/star.png' /></div>)
        }
        if (info.rate % 2 != 0) stars.push(<div className='text-white'><img width={22} src='/images/half_star.png' /></div>)
        setStars(stars);
    }

    return (
        <div style={{ minHeight: "100vh" }} className='container-fluid bg-dark vopApp infoCss'>
            {
                loading ?
                <div className='d-flex justify-content-center'>
                        <img style={{ height: '60px', width: '80px', marginTop:'176px' }} src='https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif' />
                    </div> :
                    <div className='row col-12 pt-5' >
                        <div className='col-md-5 p-3 d-flex justify-content-center '>
                            <img style={{ width: '375px', borderRadius: '12px' }} src={info.img}></img>
                        </div>
                        <div style={{ color: 'white' }} className='col-md-6 p-3 info-text '>
                            <h2>{info.name}</h2>
                            <p>{info.info}</p>
                            <h3>Genre: {info.genre}</h3>
                            <h3>Actors: {info.actors}</h3>
                            <h4>Year: {info.year}</h4>
                            <div className='d-flex info_stars'>{stars}</div>
                            <div className='mt-3'>
                                <Link to={`/`} style={{ fontWeight: '600' }} className='btn text-white border'>back</Link>
                            </div>
                        </div>
                    </div>
            }

        </div>

    )
}