interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['End Customer'],
  customerRoles: ['Guest'],
  tenantRoles: ['Car Owner', 'End Customer'],
  tenantName: 'Regular',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View car information', 'View booking details', 'Read reviews', 'View user profiles'],
  ownerAbilities: ['Manage own bookings', 'Create reviews', 'Read car information', 'Update own user information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/e8effad0-7ffe-427c-a052-fa47560008bb',
};
