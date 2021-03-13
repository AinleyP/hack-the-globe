import RelationshipStatus from './relationshipStatus'
import { Resource } from './responsiblity'

export default interface Volunteer {
  id: string,
  name: string,
  bio?: string,
  status: RelationshipStatus,
  image: string,
  resourcesOffered: Array<Resource>
}
