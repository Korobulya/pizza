import React from 'react'

const Categories = ({items, changeCat}) => {
    const [activeItem, setActiveItem] = React.useState(0)

    return (
      <div className="categories">
          <ul>
              {items.map((item, idx) => {
                  return (
                    <li
                      className={(activeItem === idx) ? 'active' : null}
                      onClick={() => setActiveItem(idx)}
                      key={`${item}+${idx}`}
                    >
                        {item}
                    </li>
                  )
              })}
          </ul>
      </div>
    )
}

export default Categories

