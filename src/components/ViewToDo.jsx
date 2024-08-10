import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewToDo = () => {
    const [data, fetchData] = useState([])
    const fetchDataFromAPI = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
            (response) => {
                fetchData(response.data)
            }
        ).catch()
    }
    useEffect(() => { fetchDataFromAPI() }, [])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">User ID</th>
                                    <th scope="col">ID no</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Completed</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value, index) => {
                                            return <tr>
                                                <th scope="row">{value.userId}</th>
                                                <td>{value.id}</td>
                                                <td>{value.title}</td>
                                                <td>{value.completed}</td>
                                            </tr>
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewToDo
