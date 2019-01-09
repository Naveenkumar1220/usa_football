class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Go to Home page"
          onPress={() => navigate('home', {name: 'Jane'})}
        />
      );
    }
  }