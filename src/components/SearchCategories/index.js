/* eslint-disable react/prop-types */
import React from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

import numberWithCommas from '../../utils/numberWithCommas';
import styles from './styles.scss';

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line arrow-body-style
const SearchCategories = ({
  onSelectCategory, movieCount,
  tvCount, collectionCount,
  selectedCategory,
}) => (
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
);

export default SearchCategories;
