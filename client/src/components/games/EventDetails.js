import React, {Component} from 'react';

class EventDetails extends React.Component{

    state ={
        name:'Ryu',
        age: 30

    }
   render (){
       return(
           <div>
               <h1> Name: {this.state.name}</h1>
               <h1> Age:{this.state.age}</h1>
               <h2>HTML Table</h2>

<table>
  <tr>
    <th>Name</th>
    <th>Price </th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>

           </div>
       )
   }
}


export default EventDetails;