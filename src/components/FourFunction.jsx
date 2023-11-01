import React from 'react';

const FourFunction = ()=>{
        const arr = [
            {
                name:"Test",
                id:101,
                age:22
            },
            {
                name:"Abc",
                id:102,
                age:25
            }
        ];
        const result = arr.filter((i)=>{
            return i.name == "Testghjghj"
        })

        let arr1 = [1,2,3,4,5];
        const res1 = arr1.reduce((total,arr1)=> total + arr1)
        return (
            
            <div>
            <h3>Map & Key Function </h3>
            <ul>
                {
                    arr.map((i,index)=>{
                        return <li key={index}>{i.name}</li>
                    })
                }
            </ul> <hr />
            <h3>Filter Function</h3>
                <ul>
                {
                    result.map((i,index)=>{
                        return <li key={index}>{i.name}</li>
                    })
                }
                </ul> <hr />
                <h3>Reduce Function</h3>
                Result is :{res1}
            </div> 
        )
}

export default FourFunction;
