import React from 'react'
import { connect } from 'react-redux'
import Header from '../component/Header'
import ProjectList from '../component/ProjectList'

const Home = () => (
  <div>
    <Header />
    <ProjectList />
  </div>
)

function mapStateToProps(state) {
  const { auth, projects } = state
  return {
    auth,
    projects
  }
}

export default connect(mapStateToProps)(Home)
