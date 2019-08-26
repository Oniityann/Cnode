import { SHOWDRAWER, HIDEDRAWER, CHANGECATG } from '../constants/menu'

const MENU_STATE = {
  catgData: [
    { key: 'all', value: '全部' },
    { key: 'essence', value: '精华' },
    { key: 'sharing', value: '分享' },
    { key: 'qna', value: '问答' },
    { key: 'hiring', value: '招聘' },
    { key: 'testing', value: '客户端测试' }
  ],
  currentCatg: { key: 'all', value: '全部' },
  showDrawer: false
}

export default function menu(prestate = MENU_STATE, action) {
  switch (action.type) {
    case SHOWDRAWER:
      return { ...prestate, showDrawer: true }
    case HIDEDRAWER:
      return { ...prestate, showDrawer: false }
    case CHANGECATG:
      return { ...prestate, currentCatg: action.currentCatg }
    default:
      return { ...prestate }
  }
}
