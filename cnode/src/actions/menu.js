import { SHOWDRAWER } from '../../dist/constants/menu'

/// 显示抽屉
export function showDrawer() {
  return (dispatch) => {
    dispatch({ type: SHOWDRAWER })
  }
}
