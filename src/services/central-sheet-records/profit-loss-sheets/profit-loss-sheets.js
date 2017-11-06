import request from "../../../utils/request";

const HOST = "13.228.183.88";
const PORT = "10003";
const PROTOCOL = "https";

export async function callCreateProfitLossSheet (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/profit-loss-sheets`, {
    method: "POST",
    params
  });
}

export async function callInitializeProfitLossSheetById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/profit-loss-sheets/${params.objectId}/initialize`, {
    method: "PUT",
    params
  });
}

export async function callLockProfitLossSheetById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/profit-loss-sheets/${params.objectId}/lock`, {
    method: "PUT",
    params
  });
}

export async function callPrintProfitLossSheetById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/profit-loss-sheets/${params.objectId}/print`, {
    method: "PUT",
    params
  });
}

export async function callRecoverProfitLossSheetById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/profit-loss-sheets/${params.objectId}/recover`, {
    method: "PUT",
    params
  });
}

export async function callRefreshProfitLossSheetRelationshipsById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/profit-loss-sheets/${params.objectId}/relationships/refresh`, {
    method: "PUT",
    params
  });
}

export async function callRemoveProfitLossSheetById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/profit-loss-sheets/${params.objectId}/remove`, {
    method: "PUT",
    params
  });
}

export async function callUnlockProfitLossSheetById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/profit-loss-sheets/${params.objectId}/unlock`, {
    method: "PUT",
    params
  });
}

export async function callVerifyProfitLossSheetById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/profit-loss-sheets/${params.objectId}/verify`, {
    method: "PUT",
    params
  });
}
