import request from "../../utils/request";

const HOST = "13.228.183.88";
const PORT = "10001";
const PROTOCOL = "https";

export async function callCreateExternalPartyRelationship (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-party-relationships`, {
    method: "POST",
    params
  });
}

export async function callDeleteExternalPartyRelationshipById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-party-relationships/${params.objectId}`, {
    method: "DELETE",
    params
  });
}
