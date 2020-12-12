import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

const Title = () => {
    const location = useLocation()

    useEffect(() => {
        document.title = `Portfolio | ${location.pathname.length <= 1 ? "Home" : location.pathname.slice(1, 100)}`
    }, [location])

    return <></>
}

export default Title

