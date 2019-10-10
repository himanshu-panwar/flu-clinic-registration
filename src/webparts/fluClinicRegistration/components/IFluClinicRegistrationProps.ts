import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface IFluClinicRegistrationProps {
  description: string;
  context: WebPartContext;
  siteUrl: string;
  typePicker: string;
  principalTypeUser: boolean;
  principalTypeSharePointGroup: boolean;
  principalTypeSecurityGroup: boolean;
  principalTypeDistributionList: boolean;
}
