import './index.css'

const TabItem = props => {
  const {eachTabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = eachTabDetails

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ' '

  return (
    <li className="li-container">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
