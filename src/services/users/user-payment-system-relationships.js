import request from "../../utils/request";

const HOST = "13.228.183.88";
const PORT = "10000";
const PROTOCOL = "https";

export async function callCreateUserPaymentSystemRelationship (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/user-payment-system-relationships`, {
    method: "POST",
    params
  });
}

export async function callDeleteUserPaymentSystemRelationshipById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/user-payment-system-relationships/${params.objectId}`, {
    method: "DELETE",
    params
  });
}
