import { useEffect, useState } from "react";


const useItemStoke = (id) => {
    const [item, setItem] = useState({})
    const [isloded, setIsloded] = useState(false)
    useEffect(() => {
        const url = `https://salty-everglades-57172.herokuapp.com/stokeupdate/${id}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [id, isloded])

    return [item, isloded, setIsloded]
};

export default useItemStoke;