// ------Config Group
export interface ConfigGroupList {
  configuration_group_id: string;
  configuration_status: number;
  configuration_group_title: string;
  configuration_group_description: string;
  sort_order: number;
  IsAllowDelete: number;
}

export interface ConfigGroupFilter {
  Active: string;
  ConfigId: string;
  ConfigGroupId: string;
  PageNo: string;
  Limit: string;
  SortBy: string;
  OrderBy: string;
  SearchText: string;
}

export interface ConfigGroupFilterInput {
  SearchText: string;
}

export interface AddConfigGroupForm {
  GroupTitle: string;
  GroupDescription: string;
  GroupStatus: string;
  SortOrder: number;
  ConfigGroupId: number;
}

export interface OrderList {
  configuration_group_id: string;
  sort_order: number;
}

// ------Config
export interface ConfigList {
  configuration_id: string;
  configuration_status: number;
  configuration_title: string;
  configuration_description: string;
  configuration_key: string;
  configuration_type: string;
  configuration_value: string;
  configuration_values: string;
  config_image: string;
  sort_order: number;
  configuration_group_id: string;
  configuration_group_title: string;
  id: string;
}

export interface ConfigFilter {
  Active: string;
  ConfigId: string;
  ConfigGroupId: string;
  PageNo: string;
  Limit: string;
  SortBy: string;
  OrderBy: string;
  SearchText: string;
}

export interface ConfigFilterInput {
  SearchText: string;
  ConfigGroupId: string;
}

export interface AddConfigForm {
  Title: string;
  Key: string;
  Value: string;
  Values: string;
  Type: string;
  Description: string;
  oldfile: string;
  Status: string;
  SortOrder: number;
  ConfigId: number;
  ConfigGroupId: string;
}

export interface ConfigOrderList {
  configuration_id: string;
  sort_order: number;
}
