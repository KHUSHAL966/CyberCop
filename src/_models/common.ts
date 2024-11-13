export interface Response {
  status: string;
  alert: string;
  message: string;
  token: string;
  data: any;
  Data: any;
}

/**
 * An object used to get page information from the server ngx-datatable
 */
export interface ngxPage {
  // The number of elements in the page
  size: number;
  // The total number of elements
  totalElements: number;
  // The total number of pages
  totalPages: number;
  // The current page number
  pageNumber: number;
  // page limit set
  pageLimit: any[][];
}

export interface CompanyData {
  basicDetails: { [key: string]: string };
}

export interface Alert {
  type: string;
  message: string;
}

export interface PageDetails {
  CurrentPage: string;
  TotalPage: string;
  TotalRecord: number;
}

export interface MasterMenu {
  id: string;
  name: string;
}

export interface ZoneMasterMenu {
  id: string;
  name: string;
  cid: number;
}

export interface MasterMenuCategory {
  id: string;
  name: string;
  children: any[][];
}

export interface CheckBoxMasterMenu {
  id: string;

  name: string;
  children?: CheckBoxMasterMenu[];
  horizontalList?: boolean;
  items?: CheckBoxMasterMenu[];
  Allow?: Allow;
}
export interface Allow {
  is_view: boolean;
  is_add: boolean;
  is_edit: boolean;
  is_delete: boolean;
  is_status: boolean;
}

export interface IsCheckedObject {
  is_view: boolean;
  is_add: boolean;
  is_edit: boolean;
  is_delete: boolean;
}

export interface DefaultCurrency {
  ID: number;
  currency_name: string;
  currency_code: string;
  currency_value: number;
  currency_symbol_left: string;
  currency_symbol_right: string;
  currency_decimal_point: string;
  currency_thousand_point: string;
  currency_decimal_places: number;
  currency_status: number;
  Name: string;
  Code: string;
  SymbolLeft: string;
  SymbolRight: string;
  DecimalPoint: string;
  ThousandPoint: string;
  DecimalPlaces: number;
}

export interface ConfigData {
  keyid: string;
  value: string;
}

export interface NavList {
  is_view: boolean;
  child: NavListChild[][];
  name: string;
}

export interface NavListChild {
  menus_name: string;
  menus_link: string;
  menus_open_type: string;
  menus_interface: string;
  menu_image: string;
  is_view: boolean;
  is_add: boolean;
  is_edit: boolean;
  is_delete: boolean;
  is_status: boolean;
}

export interface SingleAllow {
  is_view: boolean;
  is_add: boolean;
  is_edit: boolean;
  is_delete: boolean;
  is_status: boolean;
}

export interface UserLogin {
  admin_email_address: string;
  admin_firstname: string;
  admin_lastname: string;
  admin_phoneno: string;
  is_programmer: number;

  super_admin: number;
  user_image: string;
  user_id: string;
  user_name: string;
  admin_groups_name: string;
  MenuList: NavList[][];
}
