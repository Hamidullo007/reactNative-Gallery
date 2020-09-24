import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  Modal,
} from 'react-native';
import ImageElemet from './ImageElement';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';


import {
  Container, Header, Content, Footer, FooterTab, Button, Text, Left,
  Body, Title, Right, View
} from 'native-base';


class Main extends Component{
    state = {
        step: 1,
        modalVisible: false,
        modalImage: require('../images/4.jpg'),
        images: [
          require('../images/6.jpg'),
          require('../images/4.jpg'),
          require('../images/5.jpg'),        
          require('../images/7.jpg'),
          require('../images/10.jpg'),
          require('../images/12.jpg'),
          require('../images/8.jpg'),
          require('../images/11.jpg'),
        ]
      };
    
      setModalVisible(visible, imageKey) {
        this.setState({ modalImage: this.state.images[imageKey] });
        this.setState({ modalVisible: visible });
      }
    
      back = () => {
        this.props.navigation.pop();
      }
    
      getImage() {
        return this.state.modalImage;
      }
    render(){
        let images = this.state.images.map((val, key) => {
            return <TouchableWithoutFeedback key={key} onPress={() => { this.setModalVisible(true, key) }}>
              <View style={styles.imagewrap}>
                <ImageElemet imgsource={val} >
      
                </ImageElemet>
              </View>
            </TouchableWithoutFeedback>
          });
          return (
            <Container>
              <Header>
                <Left>
                  <Button transparent>
                    <Icon name='arrow-back' onPress={this.back} 
                    size={25}
                    color="white"/>
                  </Button>
                </Left>
                <Body>
                  <Title>MyGallery</Title>
                </Body>
                <Right />
              </Header>
              <Content >
              <View style={styles.container}>
                    <Modal style={styles.modal} animationType={'fade'} transparent={true}
                      visible={this.state.modalVisible}
                      onRequestClose={() => { }}
                    >
                      <View style={styles.modal}>
                        <Text style={styles.text}
                          onPress={() => this.setModalVisible(false)}
                        >
                          <Icon name="close" color="white" size={30}/>
                          </Text>
                        <ImageElemet imgsource={this.state.modalImage} ></ImageElemet>
  
                      </View>
  
                    </Modal>
                    {images}
                  </View>
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: '#eee'
    },
    imagewrap: {
      margin: 2,
      padding: 2,
      height: (Dimensions.get('window').height / 3) - 12,
      width: (Dimensions.get('window').width / 2) - 4,
      backgroundColor: '#fff',
  
    },
    modal: {
      flex: 1,
      padding: 40,
      backgroundColor: 'rgba(0,0,0, 0.9)',
  
    },
    text: {
      color: '#fff',
      textAlign: 'right'
    }
  
  });

export default Main;