import request from "../../../utils/request";

const HOST = "13.228.183.88";
const PORT = "10003";
const PROTOCOL = "https";

export async function callCreateSpecialManualRecord (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/special-manual-records`, {
    method: "POST",
    params
  });
}

export async function callRemoveSpecialManualRecordById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/special-manual-records/${params.objectId}/remove`, {
    method: "PUT",
    params
  });
}

export async function callUpdateSpecialManualRecordById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/special-manual-records/${params.objectId}`, {
    method: "PATCH",
    params
  });
}
