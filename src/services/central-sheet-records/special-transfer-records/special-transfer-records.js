import request from "../../../utils/request";

const HOST = "13.228.183.88";
const PORT = "10003";
const PROTOCOL = "https";

export async function callCreateSpecialTransferRecord (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/special-transfer-records`, {
    method: "POST",
    params
  });
}

export async function callRemoveSpecialTransferRecordById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/special-transfer-records/${params.objectId}/remove`, {
    method: "PUT",
    params
  });
}

export async function callUpdateSpecialTransferRecordById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/special-transfer-records/${params.objectId}`, {
    method: "PATCH",
    params
  });
}
