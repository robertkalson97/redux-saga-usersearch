import React, { Component } from 'react';
import {Container,Row,Col} from 'reactstrap'
import './App.css';
import SearchForm from './SearchForm';
import styled from "styled-components";

const Header = styled.div`
  border-bottom: 1px solid #999;
  margin-bottom: 40px;
  overflow: hidden;

  @media (min-width: 768px) {
    padding-right: 0;
    padding-left: 0;
  }
`;

const H1 = styled.h1`margin: 30px 5px 10px 5px;`;


class App extends Component {
  constructor(props) {
    super(props);
    this.fetchGit = this.fetchGit.bind(this);
    const {initval} = this.props;
    //console.log("---");console.log(initval);
    this.fetchGit(initval);
  }
  fetchGit(options) {
    this.props.fetchGit(options);
  }
  render() {
    const {loading,userdata,initval} = this.props;
    //console.log(userdata)
    return (
      <Container>
        <Header>
          <H1>Github User Search</H1>
        </Header>
        <Row>
          <Col align = 'center' className="title-class">
            <h1>GitHub Gallery Saga</h1>
          </Col>
        </Row>
        <Row>
          <Col className="ml-20">
            <SearchForm onSubmit={this.fetchGit} initValues={initval}/>
          </Col>
        </Row>
        { loading && <div>loading...</div> }
        { !loading && userdata && userdata.length > 0 &&
          userdata.map((user, index) => {
            return (
              <Row key={index} >
                <Col> <div className="block-class">
                  <img src={user.owner.avatar_url} alt="avatar" className="avatar-class"/>
                  <a href={user.owner.html_url}><h5>{user.owner.login}</h5></a><br />
                  <a href={user.html_url}><h5>{user.name}</h5></a>
                  </div>
                </Col>
              </Row>)
          })
        }
      </Container>
    );
  }
}

export default App;
