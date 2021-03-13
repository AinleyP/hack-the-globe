import RelationshipStatus from './relationshipStatus'

export default interface Volunteer {
  id: string,
  name: string,
  bio?: string,
  status: RelationshipStatus,
  image: string,
  resourcesOffered: Array<string>
}
