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
  legal = 'Legal Counsel',
}

export const stringToResource = (str: string): Resource => {
  if(str === 'Provide Funding'){
    return Resource.funding;
  }
  if(str === 'Contact Local Police'){
    return Resource.police;
  }
  if(str === 'Outreach'){
    return Resource.outreach;
  }
  if(str === 'Sound Equipment'){
    return Resource.sound;
  }
  if(str === 'Safety Training'){
    return Resource.training;
  }
  if(str === 'Safety Personnel'){
    return Resource.personnel;
  }
  if(str === 'Legal Counsel'){
    return Resource.legal;
  }
  return Resource.legal;
}
