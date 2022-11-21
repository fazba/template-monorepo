/**sideBar组件props类型 */
export interface SideBarProps {
  label: string
  path: string
  activeIcon: string
  noActiveIcon: string
  children?: SideBarProps[]
}
