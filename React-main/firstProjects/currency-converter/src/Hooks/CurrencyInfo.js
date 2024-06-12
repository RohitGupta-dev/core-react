import { useState, useEffect } from "react";

function useCurrenyInfo(currency) {debugger;
    const [data, setData] = useState({})
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
    useEffect(() => {

        fetch(url)
            .then(response => response.json())
            .then(data => setData(data[currency]))
            .catch(error => console.error(error));
        // fetch(url
        //     .then((res) => {
        //         console.log(res)
        //         res.json()})
        //     .then((res) => setData(res[currency]))
        // //    .then((res)=>{res.json()})
        // //    .then((res)=>{
        // //     setData(res[currency])
        //     // console.log(data);
        // // })


        // )
    },
        [currency])
    console.log(data);
    return data;
}
export default useCurrenyInfo;