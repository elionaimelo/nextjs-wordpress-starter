import {searchResultsClient} from '@/api/algolia/connector'
import {AlgoliaContext} from '@/components/common/AlgoliaProvider'
import PropTypes from 'prop-types'
import React, {useContext} from 'react'
import {Configure, InstantSearch} from 'react-instantsearch-dom'
import styles from './AlgoliaResults.module.css'
import NoResults from './templates/NoResults'
import SearchResults from './templates/SearchResults'

// TODO: Create Storybook for this component.

/**
 * Render the AlgoliaResults component.
 *
 * @author WebDevStudios
 * @param {object} props        The component attributes as props.
 * @param {object} props.config Algolia configuration.
 * @return {Element}            The AlgoliaResults component.
 */
export default function AlgoliaResults({config}) {
  const {indexName} = useContext(AlgoliaContext)
  return (
    <div className={styles.algoliaResults}>
      {config.query !== '' && (
        <InstantSearch
          searchClient={config.query !== '' ? searchResultsClient : ''}
          indexName={indexName}
        >
          <Configure {...config} />
          <SearchResults indexName={indexName} />
        </InstantSearch>
      )}
      {config.query === '' && <NoResults query={config.query} />}
    </div>
  )
}

AlgoliaResults.propTypes = {
  config: PropTypes.shape({
    query: PropTypes.string,
    hitsPerPage: PropTypes.number.isRequired
  })
}

AlgoliaResults.defaultProps = {
  config: {
    query: '',
    hitsPerPage: 15
  }
}
