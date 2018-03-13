import React from 'react'
import { connect } from 'react-redux'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from '../component/Header'

const AuthorCard = () => (
  <CardHeader
    title="Kazuki Sato"
    subtitle="Author"
    avatar="https://avatars3.githubusercontent.com/u/21677544?s=460&v=4"
  />
)
const CardExampleWithAvatar = () => (
  <MuiThemeProvider>
    <Card style={{ width: 300, height: 450, margin: 30 }}>
      <AuthorCard />
      <CardMedia style={{ margin: 15 }} >
        <img src="https://cdn.shopify.com/tools/logo-maker/show/MHB5SlNBbmJtajVsUUlOdWFKT0Ewdz09LS01NHl4ZTh4dEc0NEVORmJoRllMRGp3PT0=--f324bc23228ece4d25df30448314c227135159c3_500x.svg.png" alt="" />
      </CardMedia>
      <CardTitle title="" subtitle="ぽーとふぉりおのためのサイト" />
      <CardText>
        ポートフォリオのために作成したサイトです。
        詳しい説明はGithubのReadMeで。
      </CardText>
      <CardActions>
        <FlatButton size="small" color="primary" onClick={() => { window.open('https://github.com/dracrowa-kaz/portfolio-desu', 'newtab') }}>
          Learn More
        </FlatButton>
      </CardActions>
    </Card>
  </MuiThemeProvider>
)

const Home = () => (
  <div>
    <Header />
    <CardExampleWithAvatar />
  </div>
)

export default connect()(Home)
