import React, { Component } from 'react';
import {
    Container, Header, Content, Footer, FooterTab, Button, Text, Left,
    Body, Title, Right, Item, Input, Form
} from 'native-base';
import { StyleSheet, TouchableOpacity, Alert, BackHandler, Image } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';


class Login extends Component {
    state = {
        login: '',
        parol: '',
        btn: 'Kirish',
        us: 0,
    };

    login = (e) => {
        this.setState({ login: e });
    };

    parol = (e) => {
        this.setState({ parol: e });
    };

    toast = () => {
        this.setState({ us: this.state.us + 1 }, () => {
            if (this.state.us >= 3) {
                Alert.alert("Warning!", "Havfsizlik uchun dastur yopiladi. Qaytadan kirib yana urinib ko'rishingi mumkun.",
                    [{
                        text: 'ok',
                        onPress: () => {
                            BackHandler.exitApp();
                        }
                    }]
                );

            } else {
                Alert.alert("Login yoki Parol noto'g'ri.", "Diqqat! 3 marta noto'gri urinishdan so'ng dastur yopiladi.");
            }
        });
    }

    sub = () => {
        if (this.state.login === 'Hdd' && this.state.parol === 'Ssd') {
            this.setState({ login: '' });
            this.setState({ parol: '' });
            this.props.navigation.navigate("Main");
        } else {
            this.toast();
            this.setState({ login: '' });
            this.setState({ parol: '' });
        }

    }
    styles = StyleSheet.create({

        input: {
            marginTop: 10
        },
        btn: {
            marginTop: 25,
            alignItems: 'center',
            textAlign: 'center',
        },
        formBox: {
            margin: 30,
            marginTop: '10%',
        },
    })
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Icon name='exit-to-app' size={25} color="white"
                            onPress={() => { BackHandler.exitApp() }} />
                    </Left>
                    <Body>
                        <Title>MyGallery</Title>
                    </Body>
                    <Right />
                </Header>
                <Content style={this.styles.inputBox}>
                    <Image source={require('../images/4.jpg')} />
                    <Form style={this.styles.formBox}>
                        <Item regular style={this.styles.input} rounded={true}>

                            <Input placeholder="Login" value={this.state.login}

                                onChangeText={this.login} />
                        </Item>
                        <Item regular style={this.styles.input} rounded={true}>

                            <Input placeholder="Parol" value={this.state.parol}
                                secureTextEntry
                                onChangeText={this.parol} />
                        </Item>
                        <TouchableOpacity>
                            <Button full warning style={this.styles.btn} onPress={this.sub} rounded={true}>
                                <Text>{this.state.btn}</Text>
                            </Button>
                        </TouchableOpacity>
                    </Form>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text >developer: mhamidullo@gmail.com</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}


export default Login;

//arrow-down