import request from "../../../utils/request";

const HOST = "13.228.183.88";
const PORT = "10003";
const PROTOCOL = "https";

export async function callApprovePaymentOutRecordDetailGroup (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/payment-out-record-detail-groups/approve`, {
    method: "PUT",
    params
  });
}

export async function callRejectPaymentOutRecordDetailGroup (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/payment-out-record-detail-groups/reject`, {
    method: "PATCH",
    params
  });
}

export async function callRevertPaymentOutRecordDetailGroupById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/payment-out-record-detail-groups/${params.objectId}/revert`, {
    method: "PUT",
    params
  });
}

export async function callUpdatePaymentOutRecordDetailGroupById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/payment-out-record-detail-groups/${params.objectId}`, {
    method: "PATCH",
    params
  });
}

export async function callUpdatePaymentOutRecordDetailGroupFeesById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/payment-out-record-detail-groups/${params.objectId}/fees`, {
    method: "PUT",
    params
  });
}
