import React from 'react'
import PropTypes from 'prop-types'

const Categories = ({activeCategory, items, onClickItem}) => {

    return (
      <div className="categories">
          <ul>
              <li
                className={(activeCategory === null) ? 'active' : null}
                onClick={() => onClickItem(null)}
              >
                  Все
              </li>
              {items.map((item, idx) => {
                  return (
                    <li
                      className={(activeCategory === idx) ? 'active' : null}
                      onClick={() => onClickItem(idx)}
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

Categories.propTypes = {
    onClickCategory: PropTypes.func
}

Categories.defaultProps = {activeCategory: null, items: []}

export default React.memo(Categories)




