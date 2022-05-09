import { useEffect, useState } from 'react';
const useItems = (url) => {
    const [items, setItems] = useState([]);
    const [isReload, setIsReload] = useState(false);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then((data) => setItems(data))
    }, [isReload, url])
    return { items, setItems, isReload, setIsReload }
}
export default useItems

// https://salty-everglades-57172.herokuapp.com/allitem