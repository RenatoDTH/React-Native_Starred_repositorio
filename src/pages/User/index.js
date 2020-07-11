import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

class User extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
    route: PropTypes.shape({
      params: PropTypes.any,
    }).isRequired,
  };

  state = {
    stars: [],
  };

  async componentDidMount() {
    // const { navigation } = this.props;
    // const user = navigation.getParam('user');
    const { route } = this.props;
    const { user } = route.params;
    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({ stars: response.data });
    console.tron.log(this.state.stars);
  }

  render() {
    // const { navigation } = this.props;
    const { stars } = this.state;
    // const { user } = navigation.getParam('user');
    const { route } = this.props;
    const { user } = route.params;
    console.tron.log(user);

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        <Stars
          data={stars}
          keyExtractor={(star) => String(star.id)}
          renderItem={({ item }) => (
            <Starred>
              <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
              <Info>
                <Title>{item.name}</Title>
                <Author> {item.owner.login} </Author>
              </Info>
            </Starred>
          )}
        />
      </Container>
    );
  }
}

export default User;
