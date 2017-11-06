import request from "../../../utils/request";

const HOST = "13.228.183.88";
const PORT = "10003";
const PROTOCOL = "https";

export async function callCreatePaymentOutRecord (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/payment-out-records`, {
    method: "POST",
    params
  });
}

export async function callRemovePaymentOutRecordById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/payment-out-records/${params.objectId}/remove`, {
    method: "PUT",
    params
  });
}

export async function callUpdatePaymentOutRecordById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/payment-out-records/${params.objectId}`, {
    method: "PATCH",
    params
  });
}
