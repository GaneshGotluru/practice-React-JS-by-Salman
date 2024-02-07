import React, { useEffect, useState } from 'react'

const Stud = () => {


    function person(name, marks, perc, age, email) {
        this.name = name
        this.marks = marks
        this.perc = perc
        this.age = age
        this.email = email

    }
    let stu1 = new person("Ganesh", 80, 70, 22, "golturuganesh@gmail.com")

    let stu2 = new person("Mahesh", 70, 90, 32, "golturumahih@gmail.com")

    let stu3 = new person("Venky", 50, 50, 12, "golturugani@gmail.com")

    let stu4 = new person("Kalyan", 80, 70, 22, "gokjshdsh@gmail.com")


    let arr = [stu1, stu2, stu3, stu4]



    return (
        <>
            <h2 style={{ textAlign: "center" }}>Students data</h2>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Marks</th>
                        <th scope="col">Age</th>
                        <th scope="col">Mail</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arr.map((user, i) => {
                            return <tr>
                                {/* <th scope="row">1</th> */}
                                <td>{user.name}</td>
                                <td>{user.perc}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>


            {/* <button onClick={handleClick60}>Above 60</button> <br /> <br /> */}
            <button>Above 80</button>

        </>

    )
}

export default Stud


// function handleClick60(){
//     if(marks>60){
        
//     }
// }

// let 