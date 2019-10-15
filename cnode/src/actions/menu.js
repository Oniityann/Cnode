import { SHOWDRAWER, HIDEDRAWER, CHANGECATG } from '../../dist/constants/menu'

/// 显示抽屉
export function showDrawer() {
  return (dispatch) => {
    dispatch({ type: SHOWDRAWER })
  }
}

/// 隐藏抽屉
export const hideDrawer = () => {
  return {
    type: HIDEDRAWER
  }
}
