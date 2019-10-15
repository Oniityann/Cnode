import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { SHOWDRAWER } from '../../../dist/constants/menu'
import { showDrawer } from '../../actions/menu'
import { AtDrawer } from 'taro-ui'

import './menu.less'

@connect(
  function(store) {
    return { ...store.menu }
  },
  function(dispatch) {
    return {
      showMenu() {
        dispatch(showDrawer())
      }
    }
  }
)
class Menu extends Component {
  showDrawer() {
    this.props.showMenu && this.props.showMenu()
  }
  render() {
    return (
      <View className="topics-menu">
        <AtDrawer style="position:absolute;" />
        <Image
          className="image menu"
          src={require('../../assets/img/menu-bars.png')}
          onClick={this.showDrawer.bind(this)}
        />
        <Text className="title">
          {this.props.currentCatg ? this.props.currentCatg.value : ''}
        </Text>
        <Image
          className="image user"
          src={require('../../assets/img/user.png')}
        />
      </View>
    )
  }
}

export default Menu
