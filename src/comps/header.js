import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

export default function Header(props) {
    let search = "bank";
    const nav = useNavigate();

    const [arYears, setarYears] = useState([]);
    useEffect(() => {
        craeteYears();
    }, [])

    const craeteYears = () => {
        let tempar = [1989, 1995, 2000, 2010, 2020, 2021, 2022];
        setarYears(tempar);
    }



    return (

        <>
            <nav className='p-4'>

                <div className='row justify-content-between'>
                    <div className='col-auto display-5 mt-3 ms-4'>
                        <Link className='text-danger text-decoration-none' to={'/'}>VOD APP</Link >
                        </div>

                    <div className='row col-md-6'>
                        <div className='col-auto p-0 mx-auto p-3 '>
                            {arYears.map(item => {
                                return (
                                    <Link key={item} to={`/year/${item}`} className=' col-auto btn me-1 text-white m-2 yearCss'>{item}</Link>
                                )
                            })}
                        </div>
                    </div>
                    <div className='col-auto my-4 p-0 '>
                        <div style={{ background: "silver", borderRadius: '8px' }} className=' d-flex p-1 me-4'>
                            <input onInput={(e) => search = e.target.value} onKeyDown={(e) => { if (e.key == 'Enter') nav(`/search/${e.target.value || "bank"}`) }} style={{ background: "silver", border: "none", outline: 'none', padding:'0 16px' }} placeholder='search...' ></input>
                            <div className='me-1'>
                                <BsSearch onClick={() => { nav(`/search/${search}`) }} style={{ cursor: "pointer" }} className='p-0' />
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

