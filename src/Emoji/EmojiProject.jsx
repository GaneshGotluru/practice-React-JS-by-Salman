import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css'

const EmojiProject = () => {
    const [state, setState] = useState([]);
    const [search, setsearch] = useState('');
    const [state1, setstate1] = useState('')

    useEffect(() => {
        axios
            .get(`https://emoji-api.com/emojis?search=${state1}&access_key=89b3bdbcf9d122e0931adc0392b197b10fb526dd`)
            .then((res) => setState(res.data));
    }, [state1]);

    function handelSubmit(e) {
        e.preventDefault()
        setstate1(search)
        setsearch('')
    }

    return (
        <div>
            <form style={{ display: 'flex', gap: '20px', marginTop: '20px', justifyContent: 'center' }} onSubmit={handelSubmit} action="">
                <input className='form-control w-50' placeholder='search emoji...' type="text" value={search} onChange={(e) => setsearch(e.target.value)} />
                <button className='btn btn-outline-warning' type='submit'>Get Emoji</button>
                <button className='btn btn-outline-warning' type='submit'>Get All Emoji</button>

            </form>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', padding: '20px' }}>


                    {state.map((elem, i) => (
                        <div key={i}>
                            <div style={{ fontSize: '50px' }}>{elem.character}</div>

                        </div>
                    ))}
                </div>




            </div>


        </div>
    );
};

export default EmojiProject;