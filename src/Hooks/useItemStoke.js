import { useEffect, useState } from "react";


const useItemStoke = (id) => {
    const [item, setItem] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/stokeupdate/${id}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [id])

    return [item]
};

export default useItemStoke;