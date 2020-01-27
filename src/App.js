import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';

const customer = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : 'ȫ�浿1',
  'birthday' : '961222',
  'gender' : '����',
  'job' : '���л�',
}, {
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : 'ȫ�浿2',
  'birthday' : '961222',
  'gender' : '����',
  'job' : '���л�',
}, {
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : 'ȫ�浿3',
  'birthday' : '961222',
  'gender' : '����',
  'job' : '���л�',
}]

class App extends Component {
  render(){
    return (
      <div>
        { customer.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.name} gender={c.gender} job={c.job}/>);}) }
      </div>
    );
  }
}

export default App;
