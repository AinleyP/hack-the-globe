export default interface Responsiblity {
  name:
    | 'Provide Funding'
    | 'Contact Local Police'
    | 'Outreach'
    | 'Sound Equipment'
    | 'Safety Training'
    | 'Safety Personnel';
  status: 'filled' | 'unfilled';
}
