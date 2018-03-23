import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { fetchProjects, createProject, removeProject } from '../modules/project'
import Loading from '../component/Loading'

const styles = {
  box: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  card: {
    width: 300,
    height: 450,
    margin: 30,
    padding: 30
  }
}

const AuthorCard = () => (
  <CardHeader
    title="Kazuki Sato"
    subtitle="Author"
    avatar="https://avatars3.githubusercontent.com/u/21677544?s=460&v=4"
  />
)

const CardExampleWithAvatar = ({
  id, title, coverUrl, url, content, handleDelete
}) => (
  <MuiThemeProvider>
    <Card style={styles.card}>
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
        <FlatButton size="small" color="secondary" onClick={() => { handleDelete(id) }}>
          Delete
        </FlatButton>
      </CardActions>
    </Card>
  </MuiThemeProvider>
)

const InputCard = ({
  title,
  coverUrl,
  url,
  content,
  handleTitleChange,
  handleCoverUrlChange,
  handleUrlChange,
  handleContentChange,
  handleReset,
  handleRegister
}) => (
  <MuiThemeProvider>
    <Card style={styles.card}>
      <div>
        <TextField
          floatingLabelText="Title"
          hintText="Please input title"
          value={title}
          onChange={e => handleTitleChange(e.target.value)}
        /><br />
        <TextField
          floatingLabelText="Cover url"
          hintText="Please input cover picture url."
          value={coverUrl}
          onChange={e => handleCoverUrlChange(e.target.value)}
        /><br />
        <TextField
          floatingLabelText="Portfolio url"
          hintText="Please input portfolio url"
          value={url}
          onChange={e => handleUrlChange(e.target.value)}
        /><br />
        <TextField
          floatingLabelText="Description text"
          hintText="Please input description"
          value={content}
          onChange={e => handleContentChange(e.target.value)}
        /><br />
        <CardActions>
          <FlatButton label="Reset" onClick={handleReset} />
          <FlatButton label="Add to project" onClick={handleRegister} />
        </CardActions>
      </div>
    </Card>
  </MuiThemeProvider>
)

const initialState = {
  title: '',
  coverUrl: '',
  url: '',
  content: ''
}

class ProjectList extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
    this.props.dispatch(fetchProjects())
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleContentChange = this.handleContentChange.bind(this)
    this.handleCoverUrlChange = this.handleCoverUrlChange.bind(this)
    this.handleUrlChange = this.handleUrlChange.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.renderProjectList = this.renderProjectList.bind(this)
  }

  handleTitleChange(title) {
    this.setState({
      title
    })
  }

  handleContentChange(content) {
    this.setState({
      content
    })
  }

  handleCoverUrlChange(coverUrl) {
    this.setState({
      coverUrl
    })
  }

  handleUrlChange(url) {
    this.setState({
      url
    })
  }

  handleRegister() {
    const {
      title,
      coverUrl,
      url,
      content
    } = this.state
    const completion = () => { this.setState(initialState) }
    this.props.dispatch(createProject(title, coverUrl, url, content, completion))
  }

  handleReset() {
    this.setState(initialState)
  }

  handleDelete(id) {
    this.props.dispatch(removeProject(id))
  }

  renderProjectList(projects) {
    if (projects === undefined || projects.length === 0) {
      return null
    }
    const listItems = Object.keys(projects).map((index) => {
      const project = projects[index]
      return (<CardExampleWithAvatar key={project.id} id={project.id} title={project.title} content={project.content} url={project.url} coverUrl={project.cover_url} handleDelete={this.handleDelete} />)
    })

    listItems.push()
    return listItems
  }

  render() {
    const { projects, isLoading } = this.props.project
    const {
      title,
      coverUrl,
      url,
      content
    } = this.state
    return (
      <div>
        {isLoading && (<Loading />)}
        <div style={styles.box} >
          {!isLoading && (
            this.renderProjectList(projects)
          )}
          {!isLoading && (
          <InputCard
            title={title}
            coverUrl={coverUrl}
            url={url}
            content={content}
            handleTitleChange={this.handleTitleChange}
            handleContentChange={this.handleContentChange}
            handleCoverUrlChange={this.handleCoverUrlChange}
            handleUrlChange={this.handleUrlChange}
            handleRegister={this.handleRegister}
            handleReset={this.handleReset}
          />)}
        </div>
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
