export interface Product {
  id: string;
  name: string;
  logo:  string;
  description: string;
  date_release: string;
  date_revision: string;
}

export interface DataTableColumn {
  field: string;
  name: string;
}
