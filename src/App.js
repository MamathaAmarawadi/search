import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {searchInput: '', UserDetailsList: initialUserDetailsList}

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteUser = uniqueNo => {
    const {UserDetailsList} = this.state
    const removeDetails = UserDetailsList.filter(e => e.uniqueNo !== uniqueNo)

    this.setState({UserDetailsList: removeDetails})
  }

  render() {
    const {searchInput, UserDetailsList} = this.state
    const searchResult = UserDetailsList.filter(e =>
      e.name.includes(searchInput),
    )
    // console.log({searchInput})
    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input type="search" onChange={this.onSearch} value={searchInput} />
        <ul className="list-container">
          {searchResult.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              onDeleteUser={this.onDeleteUser}
              key={eachUser.uniqueNo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
