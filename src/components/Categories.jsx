import React from 'react'
import {useDispatch} from "react-redux";

const Categories = ({items, onClickItem}) => {
    const [activeItem, setActiveItem] = React.useState(null)

    const onSelectItems = (idx) => {
        setActiveItem(idx)
        onClickItem(idx)
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

export default React.memo(Categories)




