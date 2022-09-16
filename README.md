# React Native Setup Redux and Login/Register JWT Wordpress

    git clone https://github.com/HMDCrew/React-Native-Redux-Login-Register-WP.git
    cd React-Native-Redux-Login-Register-WP
    npm i


## File "screen/Auth.js":
  *This screen use two principal component Login and Register.*
```js

    ...

    // Is used to verify if user is authenticated on load screen 
    componentDidMount() {
        this.isLogged()
    }

    // Is used to verify autentication after complete login from Login or Register component
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.isLogged()
    }

    isLogged() {
        const { navigation } = this.props;

        if ('' !== this.props.login.token && undefined !== this.props.login.token && !this.props.login.isLoaded) {
            navigation.navigate('Home')
        }
        if( false === this.props.login.auth_status && !this.props.login.isLoaded ) {
            ToastAndroid.show('Login falied', ToastAndroid.SHORT);
        }
    }

    ...

    render() {

        const { view_login } = this.state;

        return (
            ...
            <ScrollView style={styles.px_3}>
                {view_login ?
                    <LoginComponent {...this.props} changeView={this.changeView} />
                    :
                    <RegisterComponent {...this.props} changeView={this.changeView} />
                }
            </ScrollView>
            ...
        )
    }
```

## File "components/autentication/Login.js":
*In this component is used redux to permette access Json Web Token (JWT) in all application*
```js

    ...

    // getLoginToken is used from redux store and permite save directly in redux JWToken
    hundleLogin() {
        this.setState({ loading: true });
        this.props.getLoginToken({ user: this.state.email, passwd: this.state.password })
    }

    ...

```

## File "components/autentication/Register.js":
*In this component is used custom plugin to permite registration process with api using security token in plugin for excluding bot's. after registration the auth token is saved in redux store by reducer to permette access Json Web Token (JWT) in all application*
```js

    ...
    
    // Registration request is used in component with axios and store the user with reducer componentLogin
    async registerUser() {
        this.setState({ loading: true });
        try {
        
            const { username, email, password, repeat_password } = this.state;
        
            let response = await axios.post(env.SITE_URL + "wp-json/wpr-register", {
                username: username,
                email: email,
                password: password,
                repeat_password: repeat_password,
                plugin_token: 'MySuperSecretToken',
            }).then((response) => response.data );
        
            this.props.componentLogin(response);
            this.setState({ loading: false, isLoaded: true })
    
        } catch (error) {
            console.log(error);
        }
    }

    ...

```

### Note:
Requirement plugin: Download
[JWT Authentication for WP REST API](https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)

Other documentation:
[React Native Redux Prg.](https://github.com/HMDCrew/React-Native-Redux)
[Customn routes in plugin](https://github.com/HMDCrew/REST-API-WP-Woo)

# Reference:
*https://rossbulat.medium.com/react-native-lists-load-more-by-scrolling-378a1c5f56a6*