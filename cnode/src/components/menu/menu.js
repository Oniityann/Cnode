import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './menu.less'

class Menu extends Component {
  render() {
    return (
      <View className="topics-menu">
        <Image
          className="image menu"
          src={require('../../assets/img/menu-bars.png')}
        />
        <Text>全部</Text>
        <Image
          className="image user"
          src={require('../../assets/img/user.png')}
        />
      </View>
    )
  }
}

export default Menu
