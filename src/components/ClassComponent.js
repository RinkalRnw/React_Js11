import React, { Component } from 'react';

class ClassComponent extends Component {
    render() {
        const arr = ["abc","xyz","pqr","hdgfd","duyr","utyrtu"];
        const [a,c,...b] = arr //spreading (...)
        const arr1 = [10,20,30]
        const arr2 = [...arr1, ...arr] //.Merging
        const emp = [
            {
            name:"Test",
            age:25,
            salary:25000
            }
        ]
        return (
            <div>
                <h3>Array List</h3>
                <ul>
                    {
                        arr2.map((i)=>{
                            return <li>{i}</li>
                        })

                    }
                </ul>
                {
                    emp.map((e)=>{
                        return (
                            <div>
                                <h3>Name is : {e.name}</h3>
                                <h3>Age is : {e.age}</h3>
                                <h3>Salary is : {e.salary}</h3>
                            </div>
                        )

                    })
                }
                
            </div>
        );
    }
}

export default ClassComponent;
