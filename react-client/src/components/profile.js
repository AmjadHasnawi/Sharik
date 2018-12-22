import React, { Component } from 'react';


const Profile = () => {
    return (


        <div class="container">
            <div class="row">
                <div class="col-md-3">

                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNimrjRZN3jIxU-D90rCnZ6pZvp9QF4t55QWP6PdOrCcyWpsvT" alt="" class="rounded" />

                    <br />
                    <br />

                    <div class="list-group">
                        <a href="" class="list-group-item active main-color-bg">
                            <span class="glyphicon glyphicon-cog" aria-hidden="true"></span> The Name of the user
                        </a>
                        <a href="" class="list-group-item"><span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span> Messages <span class="badge">12</span></a>
                        <a href="" class="list-group-item"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Comments <span class="badge">33</span></a>
                        <a href="" class="list-group-item"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> SOMETHING <span class="badge">203</span></a>
                    </div>







                </div>
                <div class="col-md-9">
                    <div class="panel panel-default">
                        <div class="panel-heading ">
                            <h3 class="panel-title border border-success">Your requests</h3>
                        </div>
                        <div class="panel-body">
                            <div class="row">

                            </div>
                            <br />
                            <table class="table table-striped table-hover">
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>Name 1</td>
                                    <td>@gmail.com</td>
                                    <td><a class="btn btn-success" href="">Accept</a> <a class="btn btn-danger" href="#">Reject</a></td>
                                </tr>
                                <tr>
                                    <td>Name 2</td>
                                    <td>@yahoo.com</td>
                                    <td><a class="btn btn-success" href="">Accept</a> <a class="btn btn-danger" href="#">Reject</a></td>
                                </tr>
                                <tr>
                                    <td>Name 3</td>
                                    <td>@yahoo.com</td>
                                    <td><a class="btn btn-success" href="">Accept</a> <a class="btn btn-danger" href="#">Reject</a></td>
                                </tr>
                                <tr>
                                    <td>Name 4</td>
                                    <td>@gmail.com</td>
                                    <td><a class="btn btn-success" href="">Accept</a> <a class="btn btn-danger" href="#">Reject</a></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;