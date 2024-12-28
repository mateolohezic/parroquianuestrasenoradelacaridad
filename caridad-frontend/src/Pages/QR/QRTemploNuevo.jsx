import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
function QRTemploNuevo() {
    let navigate = useNavigate();
    
    useEffect(() => {
        navigate('/Un-sueño-por-cumplir');
    }, [navigate]);

    return null;
}

export default QRTemploNuevo