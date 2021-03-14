enum RelationshipStatus {
  requested, // Organization has sent request to the activist
  pending,  // Organization which the activist has sent a request to
  suggested,
  matched,
  noRelation
}

export default RelationshipStatus