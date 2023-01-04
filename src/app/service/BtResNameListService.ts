export const namelisturl = "https://utcc-prc.demotoday.net/bt-order-api/api/BtResNameList";

export interface BtResNameList {

  IsSuccess: boolean;
  StatusCode: number;
  StatusCodeDecimal?: any;
  Message: string;
  StatusDateTime: string;
  Value: Value[];
}

export interface Value {


  RES_ID: number;
  RES_NAME: string;
  RES_PHONE: string;
  RES_STATUS: string;
  RES_DETAIL: string;
  RECORD_STATUS: string;
  CREATE_USER_ID: number;
  UPDATE_USER_ID: number;
  USER_STATUS: string;
  RES_IMAGE: string;
  CREATE_DATE: string;
  UPDATE_DATE: string;
}
