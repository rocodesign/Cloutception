import React, { useContext, useState } from 'react'
import Root from '../../context/root'
import { setSelectedTab } from '../../state/actions'

type TabProps = {
  label: string
  active: boolean
} & React.HTMLAttributes<HTMLDivElement>

const Tab = ({ label, active, ...props }: TabProps) => (
  <div
    className={`d-flex flex-column align-items-stretch h-100 pl-15px ${
      active ? 'fc-default' : 'fc-muted'
    }`}
    {...props}
  >
    <div className="d-flex h-100 align-items-center fs-15px">{label}</div>
    {active && <div className="tab-underline-active"></div>}
  </div>
)

const Tabs = () => {
  const { state, dispatch } = useContext(Root)

  const { selectedTab } = state

  const handleActiveTabChange = (index: number) => {
    dispatch(setSelectedTab(index))
  }

  return (
    <div
      className="cloutception-tabs d-flex align-items-center h-100 mr-5px"
      style={{
        justifyContent: 'flex-end',
        flexGrow: 1
      }}
    >
      <Tab
        label="Wallet"
        active={selectedTab === 0}
        onClick={() => handleActiveTabChange(0)}
      />
      <Tab
        label="History"
        active={selectedTab === 1}
        onClick={() => handleActiveTabChange(1)}
      />
    </div>
  )
}

export default Tabs
