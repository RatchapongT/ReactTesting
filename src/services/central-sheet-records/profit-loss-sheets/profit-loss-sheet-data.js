import request from "../../../utils/request";

const HOST = "13.228.183.88";
const PORT = "10003";
const PROTOCOL = "https";

export async function callUpdateProfitLossSheetDataByProfitLossSheetId (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/profit-loss-sheets/${params.profitLossSheetId}/data`, {
    method: "PATCH",
    params
  });
}

export async function callUpdateProfitLossSheetDataById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/profit-loss-sheet-data/${params.objectId}/data`, {
    method: "PATCH",
    params
  });
}
