import React, { useEffect, useState } from 'react'
import './portada.css'
import nombrePadre from '../../assets/nombrePadreNegroAños.png'

function Portada() {

    const [isIphone, setIsIphone] = useState(false)

    useEffect(() => {
        if (navigator.platform === 'iPhone' || navigator.platform === 'iPod' || navigator.platform === 'iPad' || navigator.platform === 'iPhone Simulator' || navigator.platform === 'iPod Simulator' || navigator.platform === 'iPad Simulator' || navigator.platform === 'Macintosh' || navigator.platform === 'MacIntel' || navigator.platform === 'MacAppleSilicon' || navigator.platform === 'MacPPC' || navigator.platform === 'Mac68K' || navigator.platform === 'Pike v7.6 release 92' || navigator.platform === 'Pike v7.8 release 517') {
            setIsIphone(true)
        }
    }, [])

    return (
    <>
        <div className={ isIphone ? 'portadaIphoneHome' : 'portadaHome' }>
            <img src={nombrePadre} alt="Padre Jorge Antonio Gandur" />
        </div>
    </>
    )
}

export default Portada