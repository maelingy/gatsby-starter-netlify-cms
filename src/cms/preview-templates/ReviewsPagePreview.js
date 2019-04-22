import React from 'react'
import PropTypes from 'prop-types'
import { ReviewsPageTemplate } from '../../templates/reviews-page'

const ReviewsPagePreview = ({ entry, widgetFor }) => (
  <ReviewsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ReviewsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ReviewsPagePreview
