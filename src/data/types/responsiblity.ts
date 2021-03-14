export default interface Responsiblity {
  name: Resource;
  status: 'filled' | 'unfilled';
}

export enum Resource {
  funding = 'Provide Funding',
  police = 'Contact Local Police',
  outreach = 'Outreach',
  sound = 'Sound Equipment',
  training = 'Safety Training',
  personnel = 'Safety Personnel',
  legal = 'Legal Counsel'
}
