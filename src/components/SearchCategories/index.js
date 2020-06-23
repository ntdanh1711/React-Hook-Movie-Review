import React from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import PropTypes from 'prop-types';

import numberWithCommas from '../../utils/numberWithCommas';
import styles from './styles.scss';

const SearchCategories = ({
  onSelectCategory, movieCount,
  tvCount, collectionCount,
  personCount, selectedCategory,
}) => (
  <div className={styles.categoryContainer}>
    <ListGroup className={styles.categoryTable}>
      <ListGroupItem active className={styles.categoryTable__item__title}>
        Search Results
      </ListGroupItem>
      <ListGroupItem
        className={[
          styles.categoryTable__item,
          selectedCategory === 'movie' && styles.selected,
        ]}
        onClick={() => onSelectCategory('movie')}
      >
        Movies
        <Badge pill className={styles.badge}>{numberWithCommas(movieCount)}</Badge>
      </ListGroupItem>
      <ListGroupItem
        className={[
          styles.categoryTable__item,
          selectedCategory === 'persons' && styles.selected,
        ]}
        onClick={() => onSelectCategory('persons')}
      >
        People
        <Badge pill className={styles.badge}>{numberWithCommas(personCount)}</Badge>
      </ListGroupItem>
      <ListGroupItem
        className={[
          styles.categoryTable__item,
          selectedCategory === 'tv' && styles.selected,
        ]}
        onClick={() => onSelectCategory('tv')}
      >
        TV Shows
        <Badge pill className={styles.badge}>{numberWithCommas(tvCount)}</Badge>
      </ListGroupItem>
      <ListGroupItem
        className={[
          styles.categoryTable__item__last,
          selectedCategory === 'collection' && styles.selected,
        ]}
        onClick={() => onSelectCategory('collection')}
      >
        Collections
        <Badge pill className={styles.badge}>{numberWithCommas(collectionCount)}</Badge>
      </ListGroupItem>
    </ListGroup>
    <p className={styles.searchTip}>
      <span className={styles.searchTip__icon} />
      Tip: You can use the `y:` filter to narrow your results by year. Example: `star wars y:1977`.
    </p>
  </div>
);

SearchCategories.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  movieCount: PropTypes.number,
  tvCount: PropTypes.number,
  collectionCount: PropTypes.number,
  personCount: PropTypes.number,
  onSelectCategory: PropTypes.func,
};

SearchCategories.defaultProps = {
  movieCount: 0,
  tvCount: 0,
  collectionCount: 0,
  personCount: 0,
  onSelectCategory: () => {},
};

export default SearchCategories;
