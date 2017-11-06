import request from "../../../utils/request";

const HOST = "13.228.183.88";
const PORT = "10003";
const PROTOCOL = "https";

export async function callApproveManualRecordById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/manual-records/${params.objectId}/approve`, {
    method: "PUT",
    params
  });
}

export async function callCreateManualRecord (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/manual-records`, {
    method: "POST",
    params
  });
}

export async function callRejectManualRecordById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/manual-records/${params.objectId}/reject`, {
    method: "PUT",
    params
  });
}

export async function callRemoveManualRecordById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/manual-records/${params.objectId}/remove`, {
    method: "PUT",
    params
  });
}

export async function callReviewManualRecordById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/manual-records/${params.objectId}/review`, {
    method: "PUT",
    params
  });
}

export async function callUpdateManualRecordById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/manual-records/${params.objectId}`, {
    method: "PATCH",
    params
  });
}
