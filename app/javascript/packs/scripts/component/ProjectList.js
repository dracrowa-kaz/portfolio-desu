import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { fetchProjects } from '../modules/project'

const AuthorCard = () => (
  <CardHeader
    title="Kazuki Sato"
    subtitle="Author"
    avatar="https://avatars3.githubusercontent.com/u/21677544?s=460&v=4"
  />
)

const CardExampleWithAvatar = ({
  title, coverUrl, url, content
}) => (
  <MuiThemeProvider>
    <Card style={{ width: 300, height: 450, margin: 30 }}>
      <AuthorCard />
      <CardMedia style={{ margin: 15 }} >
        <img src={coverUrl} alt="" />
      </CardMedia>
      <CardTitle title="" subtitle={title} />
      <CardText>
        { content }
      </CardText>
      <CardActions>
        <FlatButton size="small" color="primary" onClick={() => { window.open(url, 'newtab') }}>
          Learn More
        </FlatButton>
      </CardActions>
    </Card>
  </MuiThemeProvider>
)

class ProjectList extends Component {
  static renderProjectList(projects) {
    if (projects === undefined || projects.length === 0) {
      return null
    }
    const listItems = Object.keys(projects).map((index) => {
      const project = projects[index]
      return (<CardExampleWithAvatar key={project.id} title={project.title} content={project.content} url={project.url} coverUrl={project.cover_url} />)
    })
    return listItems
  }

  constructor(props) {
    super(props)
    this.props.dispatch(fetchProjects())
  }

  render() {
    const { projects } = this.props.project
    return (
      <div>
        { ProjectList.renderProjectList(projects) }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    project: state.project
  }
}

export default connect(mapStateToProps)(ProjectList)
