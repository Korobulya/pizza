import React from 'react'

const Categories = ({items}) => {
    const [activeItem, setActiveItem] = React.useState(null)

    const onSelectItems = (idx) => {
        setActiveItem(idx)
    }

    return (
      <div className="categories">
          <ul>
              <li
                className={(activeItem === null) ? 'active' : null}
                onClick={() => setActiveItem(null)}
              >
                  Все
              </li>
              {items.map((item, idx) => {
                  return (
                    <li
                      className={(activeItem === idx) ? 'active' : null}
                      onClick={() => onSelectItems(idx)}
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




